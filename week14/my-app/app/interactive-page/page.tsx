"use client";

import { useState } from "react";

export default function InteractivePage() {
  const [count, setCount] = useState(0);

  return (
    <section className="content-card">
      <h1 className="title">Interactive Route</h1>
      <p className="description">
        This page uses client-side rendering with the{" "}
        <code>&quot;use client&quot;</code> directive and React state for
        interaction.
      </p>
      <button className="count-btn" onClick={() => setCount((prev) => prev + 1)}>
        Count: {count}
      </button>
    </section>
  );
}
