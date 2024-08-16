import React, { useState } from 'react';
import './Rajasthan.css';
import Rajasthan1 from './images/rajasthan1.jpeg';
import Rajasthan2 from './images/rajasthan2.jpeg';
import Rajasthan3 from './images/rajasthan3.jpeg';
import Rajasthan4 from './images/rajasthan4.jpeg';
const space = { height: '10px' };

const Rajasthan = () => {
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
        const rajasthanLocation = { lat: 27.0238, lng: 74.2179 };
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: rajasthanLocation,
            zoom: 10
        });
        new window.google.maps.Marker({
            position: rajasthanLocation,
            map: map,
            title: 'Rajasthan'
        });
    };

    return (
        <div className="Rajasthan-container">
            <h1>Rajasthan</h1>
            <div className="Rajasthan-info">
                <h3>
                    Rajasthan, known as the "Land of Kings," is a vibrant state in northern India celebrated for its majestic forts, opulent palaces, and rich cultural heritage. Here are some highlights of Rajasthan:
                </h3>
                <h2>Capital City: Jaipur</h2>
                <img src={Rajasthan1} alt="Rajasthan" onClick={() => handleImageClick(Rajasthan1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2>Forts and Palaces:</h2>
                <p>
                    Rajasthan is home to numerous magnificent forts and palaces, including the Amber Fort, Mehrangarh Fort, and City Palace. These architectural marvels offer a glimpse into the state's royal past and attract tourists from around the world.
                </p>
                <img src={Rajasthan2} alt="Rajasthan Forts" onClick={() => handleImageClick(Rajasthan2)} />
                <h2>Desert Safari:</h2>
                <p>
                    The Thar Desert, also known as the Great Indian Desert, offers thrilling desert safari experiences. Visitors can enjoy camel rides, jeep safaris, and camping under the starry sky while exploring the desert's unique landscape and culture.
                </p>
                <h2>Traditional Arts and Crafts:</h2>
                <p>
                    Rajasthan is renowned for its vibrant arts and crafts, including intricate block printing, tie-dye (Bandhani), and handcrafted jewelry. Markets like Johari Bazaar and Bapu Bazaar in Jaipur are a paradise for shoppers seeking authentic Rajasthani handicrafts.
                </p>
                <div className="Rajasthan-images">
                    <img src={Rajasthan3} alt="Rajasthan Desert Safari" onClick={() => handleImageClick(Rajasthan3)} />
                    <img src={Rajasthan4} alt="Rajasthan Arts and Crafts" onClick={() => handleImageClick(Rajasthan4)} />
                </div>
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Rajasthan" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Rajasthan;
