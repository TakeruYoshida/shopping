import React from 'react'

function Sidebar({handleSelectedType}) {
    return (
        <aside style={{ width: '220px', padding: '1rem', backgroundColor: '#f8f8f8', borderRight: '1px solid #ddd' }}>
            <h3 style={{ marginBottom: '1rem' }}>絞り込み</h3>

            {/* カテゴリ */}
            <div style={{ marginBottom: '1.5rem' }}>
                <h4>カテゴリ</h4>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                    <li><a href="#" onClick={() => handleSelectedType("T-shirt")}>Tシャツ</a></li>
                    <li><a href="#" onClick={() => handleSelectedType("Denim")}>デニム</a></li>
                    <li><a href="#" onClick={() => handleSelectedType("Jacket")}>ジャケット</a></li>
                    <li><a href="#" onClick={() => handleSelectedType("Bag")}>バッグ</a></li>
                </ul>
            </div>

            {/* ブランド */}
            <div style={{ marginBottom: '1.5rem' }}>
                <h4>ブランド</h4>
                <label><input type="checkbox" /> UNIQLO</label><br />
                <label><input type="checkbox" /> GU</label><br />
                <label><input type="checkbox" /> ZARA</label>
            </div>

            {/* 価格帯 */}
            <div style={{ marginBottom: '1.5rem' }}>
                <h4>価格帯</h4>
                <label><input type="radio" name="price" /> ～¥2,000</label><br />
                <label><input type="radio" name="price" /> ¥2,001～¥5,000</label><br />
                <label><input type="radio" name="price" /> ¥5,001～</label>
            </div>

            {/* サイズ */}
            <div style={{ marginBottom: '1.5rem' }}>
                <h4>サイズ</h4>
                <select>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
            </div>
        </aside>
    );
}

export default Sidebar;