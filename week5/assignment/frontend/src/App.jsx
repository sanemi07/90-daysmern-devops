import { useCallback, useEffect, useMemo, useState } from "react";
import Card from "./components/Card";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
const initialFormData = {
  name: "",
  description: "",
  linkedIn: "",
  twitter: "",
   otherSocial: "",
  interests: ""
};

function App() {
  const [cards, setCards] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [editingId, setEditingId] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const formTitle = useMemo(() => (editingId ? "Edit Business Card" : "Create Business Card"), [editingId]);

  const fetchCards = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/cards`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch cards");
      }
      setCards(data.data || []);
      setStatusMessage("");
    } catch (error) {
      setStatusMessage(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setEditingId("");
  };

  const createPayload = () => ({
    name: formData.name.trim(),
    description: formData.description.trim(),
    linkedIn: formData.linkedIn.trim(),
    twitter: formData.twitter.trim(),
    otherSocial: formData.otherSocial.trim(),
    interests: formData.interests
      .split(",")
      .map((interest) => interest.trim())
      .filter(Boolean)
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = createPayload();

    if (!payload.name || !payload.description) {
      setStatusMessage("Name and description are required.");
      return;
    }

    const method = editingId ? "PUT" : "POST";
    const endpoint = editingId ? `${API_BASE_URL}/cards/${editingId}` : `${API_BASE_URL}/cards`;

    try {
      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not save card");
      }

      setStatusMessage(data.message || "Saved successfully");
      resetForm();
      fetchCards();
    } catch (error) {
      setStatusMessage(error.message);
    }
  };

  const handleEdit = (card) => {
    setEditingId(card._id);
    setFormData({
      name: card.name || "",
      description: card.description || "",
      linkedIn: card.linkedIn || "",
      twitter: card.twitter || "",
      otherSocial: card.otherSocial || "",
      interests: (card.interests || []).join(", ")
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (cardId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cards/${cardId}`, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not delete card");
      }

      setStatusMessage("Card deleted successfully");
      if (editingId === cardId) {
        resetForm();
      }
      fetchCards();
    } catch (error) {
      setStatusMessage(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-4 py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[360px_1fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-black text-slate-900">{formTitle}</h1>
          <p className="mt-1 text-sm text-slate-600">Build a reusable e-business card with socials and interests.</p>

          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
            <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring-2" />
            <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Short description" rows={3} className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring-2" />
            <input name="linkedIn" value={formData.linkedIn} onChange={handleInputChange} placeholder="LinkedIn URL" className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring-2" />
            <input name="twitter" value={formData.twitter} onChange={handleInputChange} placeholder="Twitter URL" className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring-2" />
            <input name="otherSocial" value={formData.otherSocial} onChange={handleInputChange} placeholder="Other social URL" className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring-2" />
            <input name="interests" value={formData.interests} onChange={handleInputChange} placeholder="Interests (comma separated)" className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-200 focus:ring-2" />

            <div className="mt-2 flex gap-3">
              <button type="submit" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
                {editingId ? "Update Card" : "Create Card"}
              </button>
              {editingId ? (
                <button type="button" onClick={resetForm} className="rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-300">
                  Cancel
                </button>
              ) : null}
            </div>
          </form>

          {statusMessage ? (
            <p className="mt-4 rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700">{statusMessage}</p>
          ) : null}
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-black text-slate-900">Saved Cards</h2>
          {loading ? <p className="text-sm text-slate-500">Loading cards...</p> : null}
          {!loading && cards.length === 0 ? <p className="text-sm text-slate-500">No cards yet. Create your first card.</p> : null}
          <div className="grid gap-4 md:grid-cols-2">
            {cards.map((card) => (
              <Card key={card._id} card={card} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
