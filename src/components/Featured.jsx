import './Featured.css';

const products = [
  { id: 1, name: 'Linen Blouse', category: 'Clothing', price: '€89' },
  { id: 2, name: 'Gold Hoop Earrings', category: 'Jewelry', price: '€45' },
  { id: 3, name: 'Cotton Midi Dress', category: 'Clothing', price: '€120' },
  { id: 4, name: 'Pearl Bracelet', category: 'Jewelry', price: '€65' },
];

export default function Featured() {
  return (
    <section className="featured" id="featured">
      <div className="featured-inner">
        <h2 className="featured-heading">Featured pieces</h2>
        <div className="featured-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image" aria-hidden />
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <span className="product-price">{product.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
