import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/nav';
import Sidebar from '../components/sidebar';


const ProductPage = () => {
    const [products] = useState([

        { id: 1, name: 'Tシャツ', price: 2980, type: 'T-shirt', image: '../images/T-shirts1.jpg' },
        { id: 2, name: 'デニムパンツ', price: 5980, type: 'Denim', image: '/images/denim1.jpg' },
        { id: 3, name: 'Tシャツ', price: 1980, type: 'T-shirt', image: '/images/T-shirtA.jpg' },
        { id: 4, name: 'デニムパンツ', price: 980, type: 'Denim', image: '/images/denim2.jpg' },
        { id: 5, name: 'ジャケット', price: 19000, type: 'Jacket', image: '/images/Jacket1.jpg' },
        { id: 5, name: 'キャップ', price: 10, type: 'Bag', image: '/images/denim.jpg' },
        { id: 6, name: 'デニムパンツ', price: 3980, type: 'Denim', image: '/images/denim3.jpg' },
        { id: 7, name: 'デニムパンツ', price: 4980, type: 'Denim', image: '/images/denim4.jpg' },
        { id: 8, name: 'デニムパンツ', price: 3980, type: 'Denim', image: '/images/denim5.jpg' },
        { id: 9, name: 'デニムパンツ', price: 3980, type: 'Denim', image: '/images/denim6.jpg' },
        { id: 10, name: 'ジャケット', price: 19000, type: 'Jacket', image: '/images/Jacket2.jpg' },
        { id: 11, name: 'ジャケット', price: 19000, type: 'Jacket', image: '/images/Jacket3.jpg' },
        { id: 12, name: 'ジャケット', price: 19000, type: 'Jacket', image: '/images/Jacket4.jpg' },
        { id: 13, name: 'ジャケット', price: 19000, type: 'Jacket', image: '/images/Jacket5.jpg' },
        { id: 14, name: 'ジャケット', price: 19000, type: 'Jacket', image: '/images/Jacket6.jpg' },
        { id: 15, name: 'Tシャツ', price: 1980, type: 'T-shirt', image: '/images/T-shirtC.jpg' },
        { id: 16, name: 'Tシャツ', price: 1980, type: 'T-shirt', image: '/images/T-shirtsD.jpg' },
        { id: 17, name: 'Tシャツ', price: 1980, type: 'T-shirt', image: '/images/T-shirtE.jpg' },
        { id: 18, name: 'Tシャツ', price: 1980, type: 'T-shirt', image: '/images/T-shirtF.jpg' },
        { id: 19, name: 'Tシャツ', price: 1980, type: 'T-shirt', image: '/images/T-shirtG.jpg' },
        { id: 20, name: 'Tシャツ', price: 1980, type: 'T-shirt', image: '/images/T-shirtH.jpg' }
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
                    {selectedType === 'All' ? (
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                        ))
                    ) : (
                        products
                            .filter((product) => product.type === selectedType)
                            .map((product) => (
                                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                            ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;