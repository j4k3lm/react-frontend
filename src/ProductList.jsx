import { useEffect, useState } from "react";
import { getProducts } from "./api";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadProducts() {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (products.length === 0) {
        return <p>No products found.</p>;
    }

    return (
        <div>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} — ₱{product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}