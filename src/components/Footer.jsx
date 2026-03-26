import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-logo">Très Jolie</p>
        <p className="footer-tagline">Clothing &amp; Jewelry — curated for you.</p>
        <div className="footer-links">
          <a href="#clothing">Clothing</a>
          <a href="#jewelry">Jewelry</a>
          <a href="#featured">Featured</a>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Très Jolie. All rights reserved.</p>
      </div>
    </footer>
  );
}
