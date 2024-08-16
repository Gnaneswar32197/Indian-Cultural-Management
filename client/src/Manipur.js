// import React, { useState } from 'react';
// import './Manipur.css';
// import Manipur1 from './images/manipur1.jpg';
// import Manipur2 from './images/manipur2.jpeg';
// import Manipur3 from './images/manipur3.jpeg';
// import Manipur4 from './images/manipur4.jpg';
// const space = { height: '10px' };

// const Manipur = () => {
//     const [showMap, setShowMap] = useState(false);
//     const [showFullImage, setShowFullImage] = useState(false);
//     const [fullImageUrl, setFullImageUrl] = useState('');

//     const handleViewMap = () => {
//         setShowMap(true);
//         loadMapScript();
//     };

//     const handleImageClick = (imageSrc) => {
//         setShowFullImage(true);
//         setFullImageUrl(imageSrc);
//     };

//     const handleCloseImage = () => {
//         setShowFullImage(false);
//         setFullImageUrl('');
//     };

//     const loadMapScript = () => {
//         const googleMapScript = document.createElement('script');
//         googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBA2jxZtJo79PHM87dPShu-ZX2BE6RaWzM&callback=initMap`; // Replace YOUR_API_KEY with your actual Google Maps API key
//         googleMapScript.async = true;
//         googleMapScript.defer = true;
//         window.initMap = initMap;
//         document.head.appendChild(googleMapScript);
//     };

//     const initMap = () => {
//         const manipurLocation = { lat: 24.6637, lng: 93.9063 };
//         const map = new window.google.maps.Map(document.getElementById('map'), {
//             center: manipurLocation,
//             zoom: 15
//         });
//         new window.google.maps.Marker({
//             position: manipurLocation,
//             map: map,
//             title: 'Manipur'
//         });
//     };

//     return (
//         <div className="Manipur-container">
//             <h1>Manipur</h1>
//             <div className="Manipur-info">
//                 <h3>
//                     Manipur, located in northeastern India, is known for its scenic landscapes, rich cultural heritage, and vibrant traditions. Here are some highlights of Manipur:
//                 </h3>
//                 <h2>Capital City: Imphal</h2>
//                 <img src={Manipur1} alt="Manipur" onClick={() => handleImageClick(Manipur1)} />
//                 <div style={space}></div>
//                 {!showMap && <button onClick={handleViewMap}>View Map</button>}
//                 {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
//                 <h2>Language and Culture:</h2>
//                 <p>
//                     Manipuri, also known as Meiteilon, is the official language of Manipur and is integral to its cultural identity. The state is famous for its classical dance form, Manipuri dance, which incorporates graceful movements and intricate costumes. Manipuri literature and music also play significant roles in the cultural landscape of the state.
//                 </p>
//                 <h2>Loktak Lake</h2>
//                 <p>
//                     Loktak Lake is the largest freshwater lake in Northeast India and is famous for its phumdis (floating islands) and diverse ecosystem. The lake is a Ramsar site and supports a variety of flora and fauna, including the endangered Sangai deer.
//                 </p>
//                 <img src={Manipur2} alt="Manipur Loktak Lake" onClick={() => handleImageClick(Manipur2)} />
//                 <h2>Handicrafts and Handlooms:</h2>
//                 <p>
//                     Manipur is renowned for its exquisite handicrafts and handlooms, which showcase the skilled craftsmanship of its artisans. Traditional items like shawls, textiles, pottery, and bamboo products are popular among locals and tourists alike.
//                 </p>
//                 <div className="Manipur-images">
//                     <img src={Manipur3} alt="Manipur Handicrafts" onClick={() => handleImageClick(Manipur3)} />
//                     <img src={Manipur4} alt="Manipur Handlooms" onClick={() => handleImageClick(Manipur4)} />
//                 </div>
//             </div>
//             {showFullImage && (
//                 <div className="full-image-overlay">
//                     <div className="full-image-content">
//                         <span className="close-button" onClick={handleCloseImage}>&times;</span>
//                         <img src={fullImageUrl} alt="Full Manipur" />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Manipur;

import React, { useState } from 'react';
import './Manipur.css';
import Manipur1 from './images/manipur1.jpg';
import Manipur2 from './images/manipur2.jpeg';
import HistoricalEventImage1 from './images/manipur_histo1.jpg';
import HistoricalEventImage2 from './images/manipur_histo2.jpg';

const space = { height: '10px' };

const Manipur = () => {
    const [showFullImage, setShowFullImage] = useState(false);
    const [fullImageUrl, setFullImageUrl] = useState('');

    const handleImageClick = (imageSrc) => {
        setShowFullImage(true);
        setFullImageUrl(imageSrc);
    };

    const handleCloseImage = () => {
        setShowFullImage(false);
        setFullImageUrl('');
    };

    return (
        <div className="Manipur-container">
            <h1>Manipur</h1>
            <div className="Manipur-info">
                <h3>
                    Manipur, a state in northeastern India, is known for its rich culture, traditions, and natural beauty. Here are some aspects of Manipur's cultural heritage:
                </h3>
                <h2>Capital City: Imphal</h2>
                <img src={Manipur1} alt="Manipur" onClick={() => handleImageClick(Manipur1)} />
                <div style={space}></div>
                <h2>Language and Culture:</h2>
                <p>
                    Manipuri, also known as Meiteilon, is the official language of Manipur. The state has a rich cultural heritage with traditional dance forms like Ras Lila and Sankirtana, which are an integral part of its cultural identity.
                </p>
                <h2>Loktak Lake:</h2>
                <p>
                    Loktak Lake is the largest freshwater lake in northeastern India and is famous for the phumdis (floating islands) on its surface. It is home to the endangered Manipur brow-antlered deer, also known as the Sangai.
                </p>
                <img src={Manipur2} alt="Manipur Loktak Lake" onClick={() => handleImageClick(Manipur2)} />
            </div>

            {/* Historical Events Section */}
            <div className="historical-events">
                <h2>Historical Events</h2>
                <ul>
                    <li>
                        <h3>Anglo-Manipur War (1891):</h3>
                        <p>
                            The Anglo-Manipur War was fought between the British Empire and the Kingdom of Manipur. It resulted in the annexation of Manipur by the British.
                        </p>
                        <img src={HistoricalEventImage1} alt="Anglo-Manipur War" />
                    </li>
                    <li>
                        <h3>Merger Agreement (1949):</h3>
                        <p>
                            Manipur was merged with the Indian Union on October 15, 1949, following the signing of the Merger Agreement between the Maharaja of Manipur and the Government of India.
                        </p>
                        <img src={HistoricalEventImage2} alt="Merger Agreement" />
                    </li>
                </ul>
            </div>

            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Manipur" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Manipur;

