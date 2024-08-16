import React, { useState } from 'react';
import './Meghalaya.css';
import Meghalaya1 from './images/meghalaya1.jpeg';
import Meghalaya2 from './images/meghalaya2.jpeg';
import Meghalaya3 from './images/meghalaya3.jpeg';
import Meghalaya4 from './images/meghalaya4.jpg';
const space = { height: '10px' };

const Meghalaya = () => {
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
        const meghalayaLocation = { lat: 25.4670, lng: 91.3662 };
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: meghalayaLocation,
            zoom: 15
        });
        new window.google.maps.Marker({
            position: meghalayaLocation,
            map: map,
            title: 'Meghalaya'
        });
    };

    return (
        <div className="Meghalaya-container">
            <h1>Meghalaya</h1>
            <div className="Meghalaya-info">
                <h3>
                    Meghalaya, known as the "abode of clouds," is a state in northeastern India celebrated for its picturesque landscapes and rich tribal culture. Here are some highlights of Meghalaya:
                </h3>
                <h2>Capital City: Shillong</h2>
                <img src={Meghalaya1} alt="Meghalaya" onClick={() => handleImageClick(Meghalaya1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2>Living Root Bridges</h2>
                <p>
                    Meghalaya is famous for its unique living root bridges, which are handmade from the aerial roots of rubber fig trees. These bridges, found in remote villages, are a testament to the ingenuity of the local Khasi and Jaintia tribes.
                </p>
                <img src={Meghalaya2} alt="Meghalaya Living Root Bridges" onClick={() => handleImageClick(Meghalaya2)} />
                <h2>Cuisine:</h2>
                <p>
                    Meghalayan cuisine offers a delightful array of flavors, with dishes like Jadoh (rice and meat cooked together), Dohneiiong (pork with black sesame), and Nakham Bitchi (fermented soybean chutney) being popular among locals and visitors alike.
                </p>
                <h2>Cherrapunji</h2>
                <p>
                    Cherrapunji, officially known as Sohra, is renowned as one of the wettest places on earth. It holds the record for the highest annual rainfall and boasts breathtaking vistas of mist-covered hills and cascading waterfalls.
                </p>
                <div className="Meghalaya-images">
                    <img src={Meghalaya3} alt="Meghalaya Cherrapunji" onClick={() => handleImageClick(Meghalaya3)} />
                    <img src={Meghalaya4} alt="Meghalaya Cuisine" onClick={() => handleImageClick(Meghalaya4)} />
                </div>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Meghalaya" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Meghalaya;
