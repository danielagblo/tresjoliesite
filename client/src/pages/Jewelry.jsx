import { ProductList } from "../components/ProductList";

export const Jewelry = () => {
    return (
        <main className="page-content" style={{ padding: '2rem 2rem', width: '100%' }}>
            <ProductList category="Jewelry" />
        </main>
    );
};