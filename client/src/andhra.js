// import React, { useState } from 'react';
// import './andhra.css';
// import Andhra1 from './images/ap1.jpg';
// import Andhra2 from './images/ap2.jpg';
// import Andhra3 from './images/ap3.jpg';
// import Andhra4 from './images/ap4.jpg';
// const space={height:'10px'}


// const AP1 = () => {
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
//         const apLocation = { lat: 20.9320, lng: 77.7523 };
//         const map = new window.google.maps.Map(document.getElementById('map'), {
//             center: apLocation,
//             zoom: 15
//         });
//         new window.google.maps.Marker({
//             position: apLocation,
//             map: map,
//             title: 'AndhraPradesh'
//         });
//     };

//     return (
//         <div className="AndhraPradesh-container">
//             <h1>Andhra Pradesh</h1>
//             <div className="AndhraPradesh-info">
//                 <h3>
//                 Andhra Pradesh, like many regions in India, boasts a rich and diverse cultural heritage that has been shaped by centuries of history, tradition, and influences from various civilizations. Here are some aspects of Andhra Pradesh's cultural system:
//                 </h3>
//                 <h2><h2>Capital City: Amaravati</h2></h2>
//                 <img src={Andhra1} alt="AndhraPradesh" onClick={() => handleImageClick(Andhra1)} />
//                 <div style={space}></div>
//                 {!showMap && <button onClick={handleViewMap}>View Map</button>}
//                 {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
//                 <h2><h2>Language and Literature:</h2></h2>

//                 <p>
//                  Telugu is the official language of Andhra Pradesh and plays a significant role in shaping the cultural identity of the state. Telugu literature has a long and illustrious history, with celebrated poets and writers like Nannayya, Tikkana, and Yerrapragada contributing to its richness. The state has a strong tradition of poetry, drama, and classical literature.
//                 </p>
//                 <h2><h2>Pavagada Solar Park</h2></h2>
//                 <p>
//                  Kurnool Ultra Mega Solar Park is a solar park spread over a total area of 5,932.32 acres in Panyam mandal of Kurnool district, Andhra Pradesh, with a capacity of 1,000 MW. The park was built at an investment of around ₹7,000 crore (US$980 million) by solar power developers and the Central and State governments.
//                 </p>
//                 <img src={Andhra2} alt="AndhraPradesh Upperview" onClick={() => handleImageClick(Andhra2)} />
//                 <h2><h2>Music and Dance:</h2></h2>
//                 <p>
//                  Classical music and dance forms have flourished in Andhra Pradesh for centuries. Kuchipudi, one of the eight classical dance forms recognized by the Indian government, originated in the village of Kuchipudi in Andhra Pradesh. The state is also known for its vibrant folk music and dance traditions, with various styles like Dappu, Kolatam, and Burrakatha being performed during festivals and special occasions.
//                 </p>
//                 <div className="AndhraPradesh-images">
//                     <img src={Andhra3} alt="AndhraPradesh" onClick={() => handleImageClick(Andhra3)} />
//                     <img src={Andhra4} alt="AndhraPradesh" onClick={() => handleImageClick(Andhra4)} />
//                 </div>
//                 {/* {!showMap && <button onClick={handleViewMap}>View Map</button>}
//                 {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>} */}
//             </div>
//             {showFullImage && (
//                 <div className="full-image-overlay">
//                     <div className="full-image-content">
//                         <span className="close-button" onClick={handleCloseImage}>&times;</span>
//                         <img src={fullImageUrl} alt="Full AndhraPradesh" />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default AP1;
// import React, { useState } from 'react';
// import './andhra.css';
// import Andhra1 from './images/ap1.jpg';
// import Andhra2 from './images/ap2.jpg';
// import Andhra3 from './images/ap3.jpg';
// import Andhra4 from './images/ap4.jpg';
// const space={height:'10px'}


// const AP1 = () => {
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
//         googleMapScript.src = https://maps.googleapis.com/maps/api/js?key=AIzaSyBA2jxZtJo79PHM87dPShu-ZX2BE6RaWzM&callback=initMap; // Replace YOUR_API_KEY with your actual Google Maps API key
//         googleMapScript.async = true;
//         googleMapScript.defer = true;
//         window.initMap = initMap;
//         document.head.appendChild(googleMapScript);
//     };

//     const initMap = () => {
//         const apLocation = { lat: 20.9320, lng: 77.7523 };
//         const map = new window.google.maps.Map(document.getElementById('map'), {
//             center: apLocation,
//             zoom: 15
//         });
//         new window.google.maps.Marker({
//             position: apLocation,
//             map: map,
//             title: 'AndhraPradesh'
//         });
//     };

//     return (
//         <div className="AndhraPradesh-container">
//             <h1>Andhra Pradesh</h1>
//             <div className="AndhraPradesh-info">
//                 <h3>
//                 Andhra Pradesh, like many regions in India, boasts a rich and diverse cultural heritage that has been shaped by centuries of history, tradition, and influences from various civilizations. Here are some aspects of Andhra Pradesh's cultural system:
//                 </h3>
//                 <h2><h2>Capital City: Amaravati</h2></h2>
//                 <img src={Andhra1} alt="AndhraPradesh" onClick={() => handleImageClick(Andhra1)} />
//                 <div style={space}></div>
//                 {!showMap && <button onClick={handleViewMap}>View Map</button>}
//                 {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
//                 <h2><h2>Language and Literature:</h2></h2>

//                 <p>
//                  Telugu is the official language of Andhra Pradesh and plays a significant role in shaping the cultural identity of the state. Telugu literature has a long and illustrious history, with celebrated poets and writers like Nannayya, Tikkana, and Yerrapragada contributing to its richness. The state has a strong tradition of poetry, drama, and classical literature.
//                 </p>
//                 <h2><h2>Pavagada Solar Park</h2></h2>
//                 <p>
//                  Kurnool Ultra Mega Solar Park is a solar park spread over a total area of 5,932.32 acres in Panyam mandal of Kurnool district, Andhra Pradesh, with a capacity of 1,000 MW. The park was built at an investment of around ₹7,000 crore (US$980 million) by solar power developers and the Central and State governments.
//                 </p>
//                 <img src={Andhra2} alt="AndhraPradesh Upperview" onClick={() => handleImageClick(Andhra2)} />
//                 <h2><h2>Music and Dance:</h2></h2>
//                 <p>
//                  Classical music and dance forms have flourished in Andhra Pradesh for centuries. Kuchipudi, one of the eight classical dance forms recognized by the Indian government, originated in the village of Kuchipudi in Andhra Pradesh. The state is also known for its vibrant folk music and dance traditions, with various styles like Dappu, Kolatam, and Burrakatha being performed during festivals and special occasions.
//                 </p>
//                 <div className="AndhraPradesh-images">
//                     <img src={Andhra3} alt="AndhraPradesh" onClick={() => handleImageClick(Andhra3)} />
//                     <img src={Andhra4} alt="AndhraPradesh" onClick={() => handleImageClick(Andhra4)} />
//                 </div>
//                 {/* {!showMap && <button onClick={handleViewMap}>View Map</button>}
//                 {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>} */}
//             </div>
//             {showFullImage && (
//                 <div className="full-image-overlay">
//                     <div className="full-image-content">
//                         <span className="close-button" onClick={handleCloseImage}>&times;</span>
//                         <img src={fullImageUrl} alt="Full AndhraPradesh" />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default AP1;



// import React, { useState } from 'react';
// import './andhra.css';
// import Andhra1 from './images/ap1.jpg';
// import Andhra2 from './images/ap2.jpg';
// import Andhra3 from './images/ap3.jpg';
// import Andhra4 from './images/ap4.jpg';
// import HistoricalEventImage1 from './images/aphisto1.jpg';
// import HistoricalEventImage2 from './images/aphisto2.jpg';
// import HistoricalEventImage3 from './images/aphisto3.jpeg';
// import HistoricalEventImage4 from './images/aphisto4.jpeg';

// const space = { height: '10px' };

// const AP1 = () => {
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
//         googleMapScript.src = https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap; // Replace YOUR_API_KEY with your actual Google Maps API key
//         googleMapScript.async = true;
//         googleMapScript.defer = true;
//         window.initMap = initMap;
//         document.head.appendChild(googleMapScript);
//     };

//     const initMap = () => {
//         const apLocation = { lat: 20.9320, lng: 77.7523 };
//         const map = new window.google.maps.Map(document.getElementById('map'), {
//             center: apLocation,
//             zoom: 15
//         });
//         new window.google.maps.Marker({
//             position: apLocation,
//             map: map,
//             title: 'AndhraPradesh'
//         });
//     };

//     return (
//         <div className="AndhraPradesh-container">
//             <h1>Andhra Pradesh</h1>
//             <div className="AndhraPradesh-info">
//                 <h3>
//                 Andhra Pradesh, like many regions in India, boasts a rich and diverse cultural heritage that has been shaped by centuries of history, tradition, and influences from various civilizations. Here are some aspects of Andhra Pradesh's cultural system:
//                 </h3>
//                 <h2>Capital City: Amaravati</h2>
//                 <img src={Andhra1} alt="AndhraPradesh" onClick={() => handleImageClick(Andhra1)} />
//                 <div style={space}></div>
//                 {!showMap && <button onClick={handleViewMap}>View Map</button>}
//                 {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
//                 <h2>Language and Literature:</h2>

//                 <p>
//                  Telugu is the official language of Andhra Pradesh and plays a significant role in shaping the cultural identity of the state. Telugu literature has a long and illustrious history, with celebrated poets and writers like Nannayya, Tikkana, and Yerrapragada contributing to its richness. The state has a strong tradition of poetry, drama, and classical literature.
//                 </p>
//                 <h2>Pavagada Solar Park</h2>
//                 <p>
//                  Kurnool Ultra Mega Solar Park is a solar park spread over a total area of 5,932.32 acres in Panyam mandal of Kurnool district, Andhra Pradesh, with a capacity of 1,000 MW. The park was built at an investment of around ₹7,000 crore (US$980 million) by solar power developers and the Central and State governments.
//                 </p>
//                 <img src={Andhra2} alt="AndhraPradesh Upperview" onClick={() => handleImageClick(Andhra2)} />
//                 <h2>Music and Dance:</h2>
//                 <p>
//                  Classical music and dance forms have flourished in Andhra Pradesh for centuries. Kuchipudi, one of the eight classical dance forms recognized by the Indian government, originated in the village of Kuchipudi in Andhra Pradesh. The state is also known for its vibrant folk music and dance traditions, with various styles like Dappu, Kolatam, and Burrakatha being performed during festivals and special occasions.
//                 </p>
//                 <div className="AndhraPradesh-images">
//                     <img src={Andhra3} alt="AndhraPradesh" onClick={() => handleImageClick(Andhra3)} />
//                     <img src={Andhra4} alt="AndhraPradesh" onClick={() => handleImageClick(Andhra4)} />
//                 </div>
//             </div>

//             {/* Historical Events Section */}
//             <div className="historical-events">
//                 <h2>Historical Events</h2>
//                 <ul>
//                     <li>
//                         <strong>Establishment of Amaravati:</strong> In 2017, Amaravati was officially declared as the capital city of Andhra Pradesh.
//                     </li>
//                     <li>
//                         <strong>Formation of Andhra Pradesh:</strong> Andhra Pradesh was formed on November 1, 1956, following the States Reorganization Act of 1956.
//                     </li>
//                     <li>
//                         <strong>Krishna Pushkaram:</strong> The Krishna Pushkaram is a festival held once every 12 years on the banks of the Krishna River. It is a significant event in the cultural and religious calendar of Andhra Pradesh.
//                     </li>
//                     <li>
//                         <strong>Construction of Nagarjuna Sagar Dam:</strong> The Nagarjuna Sagar Dam, one of the largest dams in India, was constructed across the Krishna River in Nalgonda District of Andhra Pradesh.
//                     </li>
//                 </ul>
//                 <div className="historical-event-images">
//                     <img src={HistoricalEventImage1} alt="Historical Event 1" />
//                     <img src={HistoricalEventImage2} alt="Historical Event 2" />
//                     <img src={HistoricalEventImage3} alt="Historical Event 3" />
//                     <img src={HistoricalEventImage4} alt="Historical Event 4" />
//                 </div>
//             </div>

//             {showFullImage && (
//                 <div className="full-image-overlay">
//                     <div className="full-image-content">
//                         <span className="close-button" onClick={handleCloseImage}>&times;</span>
//                         <img src={fullImageUrl} alt="Full AndhraPradesh" />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default AP1;


// import React, { useState } from 'react';
// import './andhra.css';
// import Andhra1 from './images/ap1.jpg';
// import Andhra2 from './images/ap2.jpg';
// import Andhra3 from './images/ap3.jpg';
// import Andhra4 from './images/ap4.jpg';
// import HistoricalEventImage1 from './images/aphisto1.jpg';
// import HistoricalEventImage2 from './images/aphisto2.jpg';
// import HistoricalEventImage3 from './images/aphisto3.jpeg';
// import HistoricalEventImage4 from './images/aphisto4.jpeg';

// const space = { height: '10px' };

// const AP1 = () => {
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
//         googleMapScript.src = https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap; // Replace YOUR_API_KEY with your actual Google Maps API key
//         googleMapScript.async = true;
//         googleMapScript.defer = true;
//         window.initMap = initMap;
//         document.head.appendChild(googleMapScript);
//     };

//     const initMap = () => {
//         const apLocation = { lat: 20.9320, lng: 77.7523 };
//         const map = new window.google.maps.Map(document.getElementById('map'), {
//             center: apLocation,
//             zoom: 15
//         });
//         new window.google.maps.Marker({
//             position: apLocation,
//             map: map,
//             title: 'AndhraPradesh'
//         });
//     };

//     return (
//         <div className="AndhraPradesh-container">
//             <h1>Andhra Pradesh</h1>
//             <div className="AndhraPradesh-info">
//                 <h3>
//                 Andhra Pradesh, like many regions in India, boasts a rich and diverse cultural heritage that has been shaped by centuries of history, tradition, and influences from various civilizations. Here are some aspects of Andhra Pradesh's cultural system:
//                 </h3>
//                 <h2>Capital City: Amaravati</h2>
//                 <img src={Andhra1} alt="AndhraPradesh" onClick={() => handleImageClick(Andhra1)} />
//                 <div style={space}></div>
//                 {!showMap && <button onClick={handleViewMap}>View Map</button>}
//                 {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
//                 <h2>Language and Literature:</h2>

//                 <p>
//                  Telugu is the official language of Andhra Pradesh and plays a significant role in shaping the cultural identity of the state. Telugu literature has a long and illustrious history, with celebrated poets and writers like Nannayya, Tikkana, and Yerrapragada contributing to its richness. The state has a strong tradition of poetry, drama, and classical literature.
//                 </p>
//                 <h2>Pavagada Solar Park</h2>
//                 <p>
//                  Kurnool Ultra Mega Solar Park is a solar park spread over a total area of 5,932.32 acres in Panyam mandal of Kurnool district, Andhra Pradesh, with a capacity of 1,000 MW. The park was built at an investment of around ₹7,000 crore (US$980 million) by solar power developers and the Central and State governments.
//                 </p>
//                 <img src={Andhra2} alt="AndhraPradesh Upperview" onClick={() => handleImageClick(Andhra2)} />
//                 <h2>Music and Dance:</h2>
//                 <p>
//                  Classical music and dance forms have flourished in Andhra Pradesh for centuries. Kuchipudi, one of the eight classical dance forms recognized by the Indian government, originated in the village of Kuchipudi in Andhra Pradesh. The state is also known for its vibrant folk music and dance traditions, with various styles like Dappu, Kolatam, and Burrakatha being performed during festivals and special occasions.
//                 </p>
//                 <div className="AndhraPradesh-images">
//                     <img src={Andhra3} alt="AndhraPradesh" onClick={() => handleImageClick(Andhra3)} />
//                     <img src={Andhra4} alt="AndhraPradesh" onClick={() => handleImageClick(Andhra4)} />
//                 </div>
//             </div>

//             {/* Historical Events Section */}
//             <div className="historical-events">
//                 <h2>Historical Events</h2>
//                 <ul>
//                     <li>
//                         <strong>Establishment of Amaravati:</strong> In 2017, Amaravati was officially declared as the capital city of Andhra Pradesh.
//                         <br />
//                         <img src={HistoricalEventImage1} alt="Historical Event 1" />
//                     </li>
//                     <li>
//                         <strong>Formation of Andhra Pradesh:</strong> Andhra Pradesh was formed on November 1, 1956, following the States Reorganization Act of 1956.
//                         <br />
//                         <img src={HistoricalEventImage2} alt="Historical Event 2" />
//                     </li>
//                     <li>
//                         <strong>Krishna Pushkaram:</strong> The Krishna Pushkaram is a festival held once every 12 years on the banks of the Krishna River. It is a significant event in the cultural and religious calendar of Andhra Pradesh.
//                         <br />
//                         <img src={HistoricalEventImage3} alt="Historical Event 3" />
//                     </li>
//                     <li>
//                         <strong>Construction of Nagarjuna Sagar Dam:</strong> The Nagarjuna Sagar Dam, one of the largest dams in India, was constructed across the Krishna River in Nalgonda District of Andhra Pradesh.
//                         <br />
//                         <img src={HistoricalEventImage4} alt="Historical Event 4" />
//                     </li>
//                 </ul>
//             </div>

//             {showFullImage && (
//                 <div className="full-image-overlay">
//                     <div className="full-image-content">
//                         <span className="close-button" onClick={handleCloseImage}>&times;</span>
//                         <img src={fullImageUrl} alt="Full AndhraPradesh" />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default AP1;


import React, { useState } from 'react';
import './andhra.css';
import Andhra1 from './images/ap1.jpg';
import Andhra2 from './images/ap2.jpg';
import Andhra3 from './images/ap3.jpg';
import Andhra4 from './images/ap4.jpg';
import HistoricalEventImage1 from './images/aphisto1.jpg';
import HistoricalEventImage2 from './images/aphisto2.jpg';
import HistoricalEventImage3 from './images/aphisto3.jpg';
import HistoricalEventImage4 from './images/aphisto4.jpg';

const space = { height: '10px' };

const AP1 = () => {
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
        googleMapScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBA2jxZtJo79PHM87dPShu-ZX2BE6RaWzM&callback=initMap'; // Replace YOUR_API_KEY with your actual Google Maps API key
        googleMapScript.async = true;
        googleMapScript.defer = true;
        window.initMap = initMap;
        document.head.appendChild(googleMapScript);
    };

    const initMap = () => {
        const apLocation = { lat: 20.9320, lng: 77.7523 };
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: apLocation,
            zoom: 15
        });
        new window.google.maps.Marker({
            position: apLocation,
            map: map,
            title: 'AndhraPradesh'
        });
    };

    return (
        <div className="AndhraPradesh-container">
            <h1>Andhra Pradesh</h1>
            <div className="AndhraPradesh-info">
                <h3>
                Andhra Pradesh, like many regions in India, boasts a rich and diverse cultural heritage that has been shaped by centuries of history, tradition, and influences from various civilizations. Here are some aspects of Andhra Pradesh's cultural system:
                </h3>
                <h2>Capital City: Amaravati</h2>
                <img src={Andhra1} alt="AndhraPradesh" onClick={() => handleImageClick(Andhra1)} />
                <div style={space}></div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                <h2>Language and Literature:</h2>

                <p>
                 Telugu is the official language of Andhra Pradesh and plays a significant role in shaping the cultural identity of the state. Telugu literature has a long and illustrious history, with celebrated poets and writers like Nannayya, Tikkana, and Yerrapragada contributing to its richness. The state has a strong tradition of poetry, drama, and classical literature.
                </p>
                <h2>Pavagada Solar Park</h2>
                <p>
                 Kurnool Ultra Mega Solar Park is a solar park spread over a total area of 5,932.32 acres in Panyam mandal of Kurnool district, Andhra Pradesh, with a capacity of 1,000 MW. The park was built at an investment of around ₹7,000 crore (US$980 million) by solar power developers and the Central and State governments.
                </p>
                <img src={Andhra2} alt="AndhraPradesh Upperview" onClick={() => handleImageClick(Andhra2)} />
                <h2>Music and Dance:</h2>
                <p>
                 Classical music and dance forms have flourished in Andhra Pradesh for centuries. Kuchipudi, one of the eight classical dance forms recognized by the Indian government, originated in the village of Kuchipudi in Andhra Pradesh. The state is also known for its vibrant folk music and dance traditions, with various styles like Dappu, Kolatam, and Burrakatha being performed during festivals and special occasions.
                </p>
                <div className="AndhraPradesh-images">
                    <img src={Andhra3} alt="AndhraPradesh" onClick={() => handleImageClick(Andhra3)} />
                    <img src={Andhra4} alt="AndhraPradesh" onClick={() => handleImageClick(Andhra4)} />
                </div>
            </div>

            {/* Historical Events Section */}
            <div className="historical-events">
                <h2>Historical Events</h2>
                <ul>
                    <li>
                        <h3>Establishment of Amaravati:</h3>
                        <p>In 2017, Amaravati was officially declared as the capital city of Andhra Pradesh.</p>
                        <img src={HistoricalEventImage1} alt="Historical Event 1" />
                    </li>
                    <li>
                        <h3>Formation of Andhra Pradesh:</h3>
                        <p>Andhra Pradesh was formed on November 1, 1956, following the States Reorganization Act of 1956.</p>
                        <img src={HistoricalEventImage2} alt="Historical Event 2" />
                    </li>
                    <li>
                        <h3>Krishna Pushkaram:</h3>
                        <p>The Krishna Pushkaram is a festival held once every 12 years on the banks of the Krishna River. It is a significant event in the cultural and religious calendar of Andhra Pradesh.</p>
                        <img src={HistoricalEventImage3} alt="Historical Event 3" />
                    </li>
                    <li>
                        <h3>Construction of Nagarjuna Sagar Dam:</h3>
                        <p>The Nagarjuna Sagar Dam, one of the largest dams in India, was constructed across the Krishna River in Nalgonda District of Andhra Pradesh.</p>
                        <img src={HistoricalEventImage4} alt="Historical Event 4" />
                    </li>
                </ul>
            </div>

            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full AndhraPradesh" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default AP1;
