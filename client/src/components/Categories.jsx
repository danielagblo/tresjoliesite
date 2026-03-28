import { Link } from 'react-router-dom';
import './Categories.css';

const categories = [
  {
    id: 'clothing',
    title: 'Clothing',
    path: '/clothing',
    description: 'Timeless pieces for your wardrobe.',
    cta: 'Browse clothing',
  },
  {
    id: 'jewelry',
    title: 'Jewelry',
    path: '/jewelry',
    description: 'Handpicked accessories to complete your look.',
    cta: 'Browse jewelry',
  },
];

export function Categories() {
  return (
    <section className="categories" id="categories">
      <div className="categories-inner">
        <h2 className="categories-heading">Shop by category</h2>
        <div className="categories-grid">
          {categories.map((cat) => (
            <Link key={cat.id} to={cat.path} className="category-card">
              <span className="category-label">{cat.title}</span>
              <p className="category-desc">{cat.description}</p>
              <span className="category-cta">{cat.cta}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
