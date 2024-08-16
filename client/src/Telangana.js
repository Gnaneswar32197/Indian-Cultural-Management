import React, { useState } from 'react';
import './Telangana.css';
import TG1 from './images/tg1.jpg';
import TG2 from './images/tg2.jpeg';
import TG3 from './images/tg3.jpeg';
import TG4 from './images/tg4.jpeg';

const space = { height: '10px' };

const Telangana = () => {
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
        const hyderabadLocation = { lat: 17.385, lng: 78.4867 }; // Coordinates for Hyderabad
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: hyderabadLocation,
            zoom: 15
        });
        new window.google.maps.Marker({
            position: hyderabadLocation,
            map: map,
            title: 'Hyderabad'
        });
    };

    return (
        <div className="TG-container">
            <h1>Telangana</h1>
            <div className="TG-info">
                <h3>
                    Telangana, a state located in southern India, is known for its rich history, vibrant culture, and architectural grandeur. Here's a glimpse into the beauty of Telangana:
                </h3>
                <h2>Capital City: Hyderabad</h2>
                <img src={TG1} alt="Telangana" onClick={() => handleImageClick(TG1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2>Historical Monuments:</h2>
                <p>
                    Telangana is home to a treasure trove of historical monuments that reflect its rich heritage and cultural legacy. The Golconda Fort, a majestic fortress known for its architectural brilliance and acoustic marvels, stands as a testament to the region's glorious past. The Qutb Shahi Tombs, Charminar, and the Falaknuma Palace are among the architectural wonders that attract visitors from around the world, offering a glimpse into the grandeur of Telangana's history.
                </p>
                <h2>Warangal</h2>
                <p>
                    Warangal, often referred to as the cultural capital of Telangana, is steeped in history and tradition. The city is renowned for its ancient temples, exquisite stone sculptures, and architectural marvels dating back to the Kakatiya dynasty. The Thousand Pillar Temple, Ramappa Temple, and the Warangal Fort are iconic landmarks that reflect the region's rich architectural heritage and spiritual significance.
                </p>
                <img src={TG2} alt="Warangal, Telangana" onClick={() => handleImageClick(TG2)} />
                <h2>Arts and Crafts:</h2>
                <p>
                    Telangana's rich cultural heritage is reflected in its vibrant arts and crafts. The state is renowned for its intricate handloom textiles, exquisite Bidriware, and vibrant folk arts. The Pochampally sarees, Nirmal paintings, and Cheriyal scroll paintings are among the traditional art forms that showcase the region's artistic brilliance and craftsmanship, passed down through generations with pride and reverence.
                </p>
                <div className="TG-images">
                    <img src={TG3} alt="Telangana" onClick={() => handleImageClick(TG3)} />
                    <img src={TG4} alt="Telangana" onClick={() => handleImageClick(TG4)} />
                </div>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Telangana" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Telangana;
