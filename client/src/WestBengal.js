import React, { useState } from 'react';
import './WestBengal.css'; // Make sure to replace with the appropriate CSS file
import WB1 from './images/wb1.jpg'; // Update with your image paths
import WB2 from './images/wb2.jpeg'; // Update with your image paths
import WB3 from './images/wb3.jpeg'; // Update with your image paths
import WB4 from './images/wb4.jpeg'; // Update with your image paths

const space = { height: '10px' };

const WestBengal = () => {
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
        // Replace the API key and coordinates with your actual Google Maps API key and coordinates
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBA2jxZtJo79PHM87dPShu-ZX2BE6RaWzM&callback=initMap`;
        googleMapScript.async = true;
        googleMapScript.defer = true;
        window.initMap = initMap;
        document.head.appendChild(googleMapScript);
    };

    const initMap = () => {
        // Replace the coordinates with the actual coordinates for West Bengal
        const westBengalLocation = { lat: 22.9868, lng: 87.855 };
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: westBengalLocation,
            zoom: 15
        });
        new window.google.maps.Marker({
            position: westBengalLocation,
            map: map,
            title: 'West Bengal'
        });
    };

    return (
        <div className="WestBengal-container">
            <h1>West Bengal</h1>
            <div className="WestBengal-info">
                <h3>
                    West Bengal, situated in eastern India, is known for its vibrant culture, diverse landscapes, and rich history. Here's a glimpse into the beauty of West Bengal:
                </h3>
                <h2>Capital City: Kolkata</h2>
                <img src={WB1} alt="West Bengal" onClick={() => handleImageClick(WB1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2>Art and Culture</h2>
                <p>
                    West Bengal is renowned for its rich artistic and cultural heritage. The state has produced eminent personalities in the fields of literature, music, dance, and cinema. Kolkata, the capital city, is often referred to as the cultural capital of India, hosting numerous cultural festivals, art exhibitions, and literary events throughout the year.
                </p>
                <h2>Sundarbans</h2>
                <p>
                    The Sundarbans, located in the southern part of West Bengal, is the largest mangrove forest in the world and a UNESCO World Heritage Site. It is home to the iconic Royal Bengal Tiger and a diverse range of flora and fauna. The Sundarbans offer visitors a unique opportunity to explore the beauty of nature and experience the tranquility of the mangrove ecosystem.
                </p>
                <img src={WB2} alt="Sundarbans, West Bengal" onClick={() => handleImageClick(WB2)} />
                <h2>Festivals</h2>
                <p>
                    West Bengal is known for its vibrant festivals, celebrated with great fervor and enthusiasm. Durga Puja, the largest festival in the state, is a grand celebration of Goddess Durga's triumph over evil. The festival showcases elaborate pandals, exquisite idols, and vibrant cultural performances, attracting millions of visitors from around the world.
                </p>
                <div className="WestBengal-images">
                    <img src={WB3} alt="West Bengal" onClick={() => handleImageClick(WB3)} />
                    <img src={WB4} alt="West Bengal" onClick={() => handleImageClick(WB4)} />
                </div>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full West Bengal" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default WestBengal;
