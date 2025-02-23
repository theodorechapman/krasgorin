
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-widest mb-8">KRAS GORIN</h1>
        <nav className="flex justify-center gap-4">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/info" className={`nav-link ${location.pathname === '/info' ? 'active' : ''}`}>
            Info
          </Link>
        </nav>
      </header>
      <main className="page-transition">{children}</main>
      <footer className="text-center mt-12 text-sm text-gray-600">
        © 2022 Kras Gorin
      </footer>
    </div>
  );
};

export default Layout;
