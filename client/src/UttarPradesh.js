import React, { useState } from 'react';
import './UttarPradesh.css';
import UP1 from './images/up1.jpeg';
import UP2 from './images/up2.jpeg';
import UP3 from './images/up3.jpeg';
import UP4 from './images/up4.jpeg';

const space = { height: '10px' };

const UttarPradesh = () => {
    const [showMap, setShowMap] = useState(false);
    const [showFullImage, setShowFullImage] = useState(false);
    const [fullImageUrl, setFullImageUrl] = useState('');

    const handleViewMap = () => {
        setShowMap(true);
        loadMapScript();
    };

    const handleImageClick = (imageSrc) => {
        setShowFullImage(true);
        setFullImageUrl(imageSrc);
    };

    const handleCloseImage = () => {
        setShowFullImage(false);
        setFullImageUrl('');
    };

    const loadMapScript = () => {
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBA2jxZtJo79PHM87dPShu-ZX2BE6RaWzM&callback=initMap`; // Replace YOUR_API_KEY with your actual Google Maps API key
        googleMapScript.async = true;
        googleMapScript.defer = true;
        window.initMap = initMap;
        document.head.appendChild(googleMapScript);
    };

    const initMap = () => {
        const lucknowLocation = { lat: 26.8467, lng: 80.9462 }; // Coordinates for Lucknow
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: lucknowLocation,
            zoom: 15
        });
        new window.google.maps.Marker({
            position: lucknowLocation,
            map: map,
            title: 'Lucknow'
        });
    };

    return (
        <div className="UP-container">
            <h1>Uttar Pradesh</h1>
            <div className="UP-info">
                <h3>
                    Uttar Pradesh, located in northern India, is known for its rich cultural heritage, historical monuments, and spiritual legacy. Here's a glimpse into the beauty of Uttar Pradesh:
                </h3>
                <h2>Capital City: Lucknow</h2>
                <img src={UP1} alt="Uttar Pradesh" onClick={() => handleImageClick(UP1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2>Historical Monuments:</h2>
                <p>
                    Uttar Pradesh is home to some of the most iconic historical monuments in India. The Taj Mahal, a UNESCO World Heritage Site, is a breathtaking symbol of love and architectural brilliance. The Agra Fort, Fatehpur Sikri, and the Sikandra are among the other architectural wonders that showcase the region's rich cultural and historical legacy.
                </p>
                <h2>Varanasi</h2>
                <p>
                    Varanasi, also known as Kashi or Banaras, is one of the oldest continuously inhabited cities in the world. Situated on the banks of the sacred Ganges River, Varanasi is a spiritual and cultural hub of India. The city is renowned for its ancient temples, ghats, and vibrant street life, offering visitors a unique and immersive experience of Indian culture and spirituality.
                </p>
                <img src={UP2} alt="Varanasi, Uttar Pradesh" onClick={() => handleImageClick(UP2)} />
                <h2>Arts and Crafts:</h2>
                <p>
                    Uttar Pradesh has a rich tradition of arts and crafts, deeply rooted in its cultural and historical heritage. The state is renowned for its exquisite handwoven textiles, intricate embroidery, and vibrant folk arts. The Chikankari embroidery of Lucknow, the Banarasi silk sarees, and the terracotta pottery of Gorakhpur are among the traditional art forms that showcase the region's artistic brilliance and craftsmanship.
                </p>
                <div className="UP-images">
                    <img src={UP3} alt="Uttar Pradesh" onClick={() => handleImageClick(UP3)} />
                    <img src={UP4} alt="Uttar Pradesh" onClick={() => handleImageClick(UP4)} />
                </div>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Uttar Pradesh" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default UttarPradesh;
