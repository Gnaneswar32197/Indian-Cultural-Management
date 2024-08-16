import React, { useState } from 'react';
import './TamilNadu.css';
import TN1 from './images/tn1.jpg';
import TN2 from './images/tn2.jpg';
import TN3 from './images/tn3.jpeg';
import TN4 from './images/tn4.jpeg';

const space = { height: '10px' };

const TamilNadu = () => {
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
        const chennaiLocation = { lat: 13.0827, lng: 80.2707 }; // Coordinates for Chennai
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: chennaiLocation,
            zoom: 15
        });
        new window.google.maps.Marker({
            position: chennaiLocation,
            map: map,
            title: 'Chennai'
        });
    };

    return (
        <div className="TN-container">
            <h1>Tamil Nadu</h1>
            <div className="TN-info">
                <h3>
                    Tamil Nadu, located in the southern part of India, is known for its rich cultural heritage, classical music, and historical landmarks. Here's a glimpse into the beauty of Tamil Nadu:
                </h3>
                <h2>Capital City: Chennai</h2>
                <img src={TN1} alt="Tamil Nadu" onClick={() => handleImageClick(TN1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2>Art and Architecture:</h2>
                <p>
                    Tamil Nadu is renowned for its magnificent temples, showcasing exquisite Dravidian architecture. These temples, adorned with intricately carved sculptures and towering gopurams, stand as testaments to the region's rich cultural and religious heritage. The Brihadeeswarar Temple in Thanjavur, the Meenakshi Amman Temple in Madurai, and the Shore Temple in Mahabalipuram are among the architectural marvels that draw visitors from around the world.
                </p>
                <h2>Madurai</h2>
                <p>
                    Madurai, one of the oldest continuously inhabited cities in the world, is a cultural hub of Tamil Nadu. The city is synonymous with the Meenakshi Amman Temple, a sprawling complex dedicated to Goddess Meenakshi and Lord Sundareswarar. The temple's stunning architecture, vibrant sculptures, and bustling markets attract pilgrims and tourists alike, offering a glimpse into the region's rich history and cultural legacy.
                </p>
                <img src={TN2} alt="Madurai, Tamil Nadu" onClick={() => handleImageClick(TN2)} />
                <h2>Music and Dance:</h2>
                <p>
                    Tamil Nadu has a rich tradition of music and dance, deeply rooted in its cultural and religious practices. Classical forms of music such as Carnatic music, with its intricate melodies and rhythmic patterns, have flourished in the region for centuries. Bharatanatyam, a classical dance form characterized by its graceful movements and expressive gestures, is a vibrant aspect of Tamil Nadu's cultural landscape, reflecting the region's artistic brilliance and spiritual ethos.
                </p>
                <div className="TN-images">
                    <img src={TN3} alt="Tamil Nadu" onClick={() => handleImageClick(TN3)} />
                    <img src={TN4} alt="Tamil Nadu" onClick={() => handleImageClick(TN4)} />
                </div>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Tamil Nadu" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default TamilNadu;
