export default function StaticPage() {
  return (
    <section className="content-card">
      <h1 className="title">Static Route</h1>
      <p className="description">
        This page is statically rendered, so Next.js can generate the HTML at
        build time for faster loading, improved SEO, and reliable performance.
      </p>
    </section>
  );
}
