import React, { useState } from 'react';
import './Odisha.css';
import Odisha1 from './images/odisha1.jpeg';
import Odisha2 from './images/odisha2.jpeg';
import Odisha3 from './images/odisha3.jpg';
import Odisha4 from './images/odisha4.jpg';
const space = { height: '10px' };

const Odisha = () => {
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
        const odishaLocation = { lat: 20.9517, lng: 85.0985 };
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: odishaLocation,
            zoom: 15
        });
        new window.google.maps.Marker({
            position: odishaLocation,
            map: map,
            title: 'Odisha'
        });
    };

    return (
        <div className="Odisha-container">
            <h1>Odisha</h1>
            <div className="Odisha-info">
                <h3>
                    Odisha, located on the eastern coast of India, is renowned for its rich cultural heritage, stunning temples, and vibrant festivals. Here are some highlights of Odisha:
                </h3>
                <h2>Capital City: Bhubaneswar</h2>
                <img src={Odisha1} alt="Odisha" onClick={() => handleImageClick(Odisha1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2>Temples:</h2>
                <p>
                    Odisha is home to magnificent temples like the Jagannath Temple in Puri, the Sun Temple in Konark, and the Lingaraja Temple in Bhubaneswar. These architectural marvels showcase the state's rich religious and artistic traditions.
                </p>
                <img src={Odisha2} alt="Odisha Temples" onClick={() => handleImageClick(Odisha2)} />
                <h2>Beaches:</h2>
                <p>
                    The coastline of Odisha is dotted with pristine beaches offering opportunities for relaxation and water sports. Beaches like Puri Beach and Chandrabhaga Beach attract tourists from far and wide.
                </p>
                <h2>Art and Handicrafts:</h2>
                <p>
                    Odisha is famous for its intricate handicrafts, including Pattachitra paintings, applique work, and silver filigree. These traditional crafts reflect the state's rich cultural heritage and artistic prowess.
                </p>
                <div className="Odisha-images">
                    <img src={Odisha3} alt="Odisha Beaches" onClick={() => handleImageClick(Odisha3)} />
                    <img src={Odisha4} alt="Odisha Handicrafts" onClick={() => handleImageClick(Odisha4)} />
                </div>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Odisha" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Odisha;
