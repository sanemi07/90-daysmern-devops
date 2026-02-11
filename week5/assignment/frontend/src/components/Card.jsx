const Card = ({
  card,
  onEdit,
  onDelete
}) => {
  const socialLinks = [
    { label: "LinkedIn", href: card.linkedIn },
    { label: "Twitter", href: card.twitter },
    { label: "Other", href: card.otherSocial }
  ].filter((social) => social.href);

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-slate-900">{card.name}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
      </div>

      <div className="mb-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Interests</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {card.interests?.length ? (
            card.interests.map((interest) => (
              <span key={interest} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                {interest}
              </span>
            ))
          ) : (
            <span className="text-sm text-slate-500">No interests added</span>
          )}
        </div>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {socialLinks.length ? (
          socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-sky-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              {social.label}
            </a>
          ))
        ) : (
          <span className="text-sm text-slate-500">No social links</span>
        )}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => onEdit(card)}
          className="rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete(card._id)}
          className="rounded-lg bg-rose-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-rose-700"
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default Card;
