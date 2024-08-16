import React, { useState } from 'react';
import './Punjab.css';
import Punjab1 from './images/punjab1.jpeg';
import Punjab2 from './images/punjab2.jpeg';
import Punjab3 from './images/punjab3.jpeg';
import Punjab4 from './images/punjab4.jpg';
const space = { height: '10px' };

const Punjab = () => {
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
        const punjabLocation = { lat: 31.1471, lng: 75.3412 };
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: punjabLocation,
            zoom: 10
        });
        new window.google.maps.Marker({
            position: punjabLocation,
            map: map,
            title: 'Punjab'
        });
    };

    return (
        <div className="Punjab-container">
            <h1>Punjab</h1>
            <div className="Punjab-info">
                <h3>
                    Punjab, located in northern India, is famous for its rich history, vibrant culture, and delicious cuisine. Here are some highlights of Punjab:
                </h3>
                <h2>Capital City: Chandigarh</h2>
                <img src={Punjab1} alt="Punjab" onClick={() => handleImageClick(Punjab1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2>Cuisine:</h2>
                <p>
                    Punjabi cuisine is known for its rich flavors and hearty meals. Popular dishes include Sarson da Saag and Makki di Roti, Butter Chicken, and Amritsari Fish. The cuisine is characterized by its generous use of spices and dairy products.
                </p>
                <img src={Punjab2} alt="Punjab Cuisine" onClick={() => handleImageClick(Punjab2)} />
                <h2>Culture and Festivals:</h2>
                <p>
                    Punjab has a vibrant cultural scene, with Bhangra and Giddha being popular folk dances. The state celebrates various festivals with great enthusiasm, including Vaisakhi, Diwali, and Lohri, which marks the end of winter and the onset of spring.
                </p>
                <h2>Golden Temple:</h2>
                <p>
                    The Harmandir Sahib, popularly known as the Golden Temple, is the holiest shrine of Sikhism and one of the most iconic landmarks in Punjab. The temple's golden facade and serene surroundings attract millions of visitors each year.
                </p>
                <div className="Punjab-images">
                    <img src={Punjab3} alt="Golden Temple" onClick={() => handleImageClick(Punjab3)} />
                    <img src={Punjab4} alt="Punjab Festivals" onClick={() => handleImageClick(Punjab4)} />
                </div>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Punjab" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Punjab;
