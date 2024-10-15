import React, { useState } from 'react';
import './French.css';

function French() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            id: 1,
            href: '/food',
            src: 'https://imgs.search.brave.com/dulqAptP5G0B7_vPiVHtTbtUVf1BGep_eGia_Zaw2lE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/NzA0MTE3L3Bob3Rv/L3Jlc3RhdXJhbnQt/cGxhdGVzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1NaEZk/Tl9xVmd6b0hvdi1r/Z0Z4MHFXU1cwblpo/dDRsWlYxemluQzNF/YTQ0PQ',
            title: 'Food',
            description: 'Delicious food items from France.'
        },
        {
            id: 2,
            href: '/drinks',
            src: 'https://imgs.search.brave.com/PJEy5x1hYo4eUFdjiz-vw_oEQBeGiYy0UxHXNOA0REg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmluZWRpbmluZ2xv/dmVycy5jb20vc2l0/ZXMvZy9maWxlcy94/a25mZGs2MjYvZmls/ZXMvMjAyMS0xMi90/eXBlcy1nbGFzc3dh/cmUtbWFydGluaS1j/b2NrdGFpbCVDMiVB/OWlTdG9jay5qcGc',
            title: 'Drinks',
            description: 'Refreshing beverages.'
        }
    ];

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    return (
        <div className="App">
            <main>
                <div className="c-carousel-container">
                    <div className="c-carousel-card">
                        <div className="c-photo">
                            <a href={cards[currentIndex].href}>
                                <img src={cards[currentIndex].src} alt={cards[currentIndex].title} />
                            </a>
                        </div>
                        <div className="c-product-info">
                            <h2>{cards[currentIndex].title}</h2>
                            <p>{cards[currentIndex].description}</p>
                        </div>
                    </div>
                    <button className="c-nav-button c-next" onClick={nextCard}>❯</button>
                </div>
                <div className="c-grid-container">
                    {cards.map((card) => (
                        <div key={card.id} className="c-card">
                            <div className="c-photo">
                                <a href={card.href}>
                                    <img src={card.src} alt={card.title} />
                                </a>
                            </div>
                            <div className="c-product-info">
                                <h2>{card.title}</h2>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default French;
