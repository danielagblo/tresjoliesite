import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <a href="/" className="site-logo">Très Jolie</a>
      <nav className="site-nav">
        <a href="#clothing">Clothing</a>
        <a href="#jewelry">Jewelry</a>
        <a href="#featured">Featured</a>
      </nav>
    </header>
  );
}
