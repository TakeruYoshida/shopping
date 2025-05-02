import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/nav';
import Sidebar from '../components/sidebar';

const ProductPage = () => {
    const [products] = useState([

        { id: 1, name: 'Tシャツ', price: 2980, image: '../images/T-shirts1.jpg' },
        { id: 2, name: 'デニムパンツ', price: 5980, image: '/images/denim.jpg' },
        { id: 3, name: 'キャップ', price: 1980, image: '/images/denim.jpg' },
        { id: 4, name: 'キャップ', price: 1980, image: '/images/denim.jpg' },
        { id: 5, name: 'キャップ', price: 1980, image: '/images/denim.jpg' }

    ]);

    const selectedItem = []

    const handleAddToCart = (product) => {
        alert(`${product.name} をカートに追加しました`);
        selectedItem.push(product.name)
        console.log(`カートに入っている商品: ${selectedItem}`)
    };

    return (
        <div>
            <Navbar />
            <div style={{ display: 'flex', padding: '2rem', gap: '2rem' }}>
                <Sidebar />
                <div style={{ display: 'flex', gap: '1rem', padding: '2rem' }}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;