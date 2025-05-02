import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/nav';
import Sidebar from '../components/sidebar';


const ProductPage = () => {
    const [products] = useState([

        { id: 1, name: 'Tシャツ', price: 2980, type: 'T-shirt', image: '../images/T-shirts1.jpg' },
        { id: 2, name: 'HARLEY', price: 5980, type: 'T-shirt', image: '/images/denim.jpg' },
        { id: 3, name: 'キャップ', price: 1980, type: 'T-shirt', image: '/images/denim.jpg' },
        { id: 4, name: 'キャップ', price: 980, type: 'Denim', image: '/images/denim.jpg' },
        { id: 5, name: 'キャップ', price: 190, type: 'Jacket', image: '/images/denim.jpg' },
        { id: 5, name: 'キャップ', price: 10, type: 'Bag', image: '/images/denim.jpg' }
    ]);

    const [selectedType, setSelectedType] = useState("T-shirt")

    const handleTypeSelectMenu = (type) => {
        setSelectedType(type)
    };

    const handleAddToCart = (product) => {
        // alert(`${product.name} をカートに追加しました`);
        // selectedItem.push(product.name)
        // console.log(`カートに入っているアイテム: ${selectedItem}`)
    };

    return (
        <div>
            <Navbar />
            <div style={{ display: 'flex', padding: '2rem', gap: '2rem' }}>
                <Sidebar handleSelectedType={handleTypeSelectMenu} />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '2rem' }}>
                    {products
                        .filter((product) => selectedType === "all" || product.type === selectedType)
                        .filter((product) => product.type === selectedType) // T-shirt のみ抽出
                        .map((product) => (
                            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;