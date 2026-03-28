import { useQuery } from '@tanstack/react-query';
import './Featured.css';
import { GalleryCard } from './GalleryCard';

const fetchFeaturedProducts = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await fetch(`${apiUrl}/products?featured=true`);
    if (!response.ok) throw new Error('Failed to fetch featured products');
    return response.json();
};

export function Featured() {
    const { data: products, isLoading, error } = useQuery({
        queryKey: ['featuredProducts'],
        queryFn: fetchFeaturedProducts
    });

    if (isLoading) return <div className="featured-loading">Loading featured pieces...</div>;
    if (error) return <div className="featured-error">Error: {error.message}</div>;

    return (
        <section className="featured" id="featured">
            <div className="featured-inner">
                <h2 className="featured-heading">Featured pieces</h2>
                <div className="featured-grid">
                    {products.map((product) => (
                        <GalleryCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
