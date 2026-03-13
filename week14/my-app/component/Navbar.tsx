import Link from "next/link";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="nav-links" aria-label="Main Navigation">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/static-page" className="nav-link">
          Static Route
        </Link>
        <Link href="/interactive-page" className="nav-link">
          Interactive Route
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
