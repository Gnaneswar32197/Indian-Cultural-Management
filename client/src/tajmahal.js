


// import React, { useState } from 'react';
// import './tajmahal.css';
// import TajMahalimage1 from './images/tajmahal1.jpg';
// import TajMahalimage2 from './images/tajmahal2.jpg';
// import TajMahalimage3 from './images/tajmahal3.jpg';

// const TajMahal = () => {
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
//         googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDqOIJO2ldFaC_4O6gaj4mJ4ViSpPlh4uo&callback=initMap`; // Replace YOUR_API_KEY with your actual Google Maps API key
//         googleMapScript.async = true;
//         googleMapScript.defer = true;
//         window.initMap = initMap;
//         document.head.appendChild(googleMapScript);
//     };

//     const initMap = () => {
//         const tajMahalLocation = { lat: 27.1751, lng: 78.0421 };
//         const map = new window.google.maps.Map(document.getElementById('map'), {
//             center: tajMahalLocation,
//             zoom: 15
//         });
//         new window.google.maps.Marker({
//             position: tajMahalLocation,
//             map: map,
//             title: 'Taj Mahal'
//         });
//     };

//     return (
//         <div className="tajmahal-container">
//             <h1>Taj Mahal</h1>
//             <div className="tajmahal-info">
//                 <p>
//                     The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor, Shah Jahan, to house the tomb of his favorite wife, Mumtaz Mahal.
//                 </p>
//                 <p>
//                     The Taj Mahal is widely recognized as "the jewel of Muslim art in India" and remains a symbol of India's rich history and cultural heritage. It attracts millions of visitors from all over the world every year.
//                 </p>
//                 <p>
//                     Construction of the Taj Mahal began in 1632 and was completed in 1653, employing thousands of artisans and craftsmen. The main mausoleum is flanked by four minarets and is set within a large garden with reflecting pools, making it an architectural masterpiece.
//                 </p>
//                 <p>
//                     The Taj Mahal's design incorporates elements from Persian, Islamic, and Indian architectural styles, making it a symbol of the fusion of cultural influences. It is also a UNESCO World Heritage Site and one of the Seven Wonders of the World.
//                 </p>
//                 <div className="tajmahal-images">
//                     <img src={TajMahalimage1} alt="Taj Mahal" onClick={() => handleImageClick(TajMahalimage1)} />
//                     <img src={TajMahalimage2} alt="Taj Mahal Upperview" onClick={() => handleImageClick(TajMahalimage2)} />
//                     <img src={TajMahalimage3} alt="Taj Mahal" onClick={() => handleImageClick(TajMahalimage3)} />
//                 </div>
//                 {!showMap && <button onClick={handleViewMap}>View Map</button>}
//                 {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
//             </div>
//             {showFullImage && (
//                 <div className="full-image-overlay">
//                     <div className="full-image-content">
//                         <span className="close-button" onClick={handleCloseImage}>&times;</span>
//                         <img src={fullImageUrl} alt="Full Taj Mahal" />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default TajMahal;







// import React, { useState, useEffect } from 'react';
// import './tajmahal.css';
// import TajMahalimage1 from './images/tajmahal1.jpg';
// import TajMahalimage2 from './images/tajmahal2.jpg';
// import TajMahalimage3 from './images/tajmahal3.jpg';

// const TajMahal = () => {
//     const [showMap, setShowMap] = useState(false);
//     const [showFullImage, setShowFullImage] = useState(false);
//     const [fullImageUrl, setFullImageUrl] = useState('');

//     const handleViewMap = () => {
//         setShowMap(true);
//     };

//     const handleImageClick = (imageSrc) => {
//         setShowFullImage(true);
//         setFullImageUrl(imageSrc);
//     };

//     const handleCloseImage = () => {
//         setShowFullImage(false);
//         setFullImageUrl('');
//     };

//     useEffect(() => {
//         if (showMap) {
//             loadMapScript();
//         }
//     }, [showMap]);

//     const loadMapScript = () => {
//         const googleMapScript = document.createElement('script');
//         googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDqOIJO2ldFaC_4O6gaj4mJ4ViSpPlh4uo&callback=initMap`;
//         googleMapScript.async = true;
//         googleMapScript.defer = true;
//         window.initMap = initMap;
//         document.head.appendChild(googleMapScript);
//     };

//     const initMap = () => {
//         const tajMahalLocation = { lat: 27.1751, lng: 78.0421 };
//         const map = new window.google.maps.Map(document.getElementById('map'), {
//             center: tajMahalLocation,
//             zoom: 15
//         });
//         new window.google.maps.Marker({
//             position: tajMahalLocation,
//             map: map,
//             title: 'Taj Mahal'
//         });
//     };

//     return (
//         <div className="tajmahal-container">
//             <h1>Taj Mahal</h1>
//             <div className="tajmahal-info">
//                 <p>
//                     The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor, Shah Jahan, to house the tomb of his favorite wife, Mumtaz Mahal.
//                 </p>
//                 <p>
//                     The Taj Mahal is widely recognized as "the jewel of Muslim art in India" and remains a symbol of India's rich history and cultural heritage. It attracts millions of visitors from all over the world every year.
//                 </p>
//                 <p>
//                     Construction of the Taj Mahal began in 1632 and was completed in 1653, employing thousands of artisans and craftsmen. The main mausoleum is flanked by four minarets and is set within a large garden with reflecting pools, making it an architectural masterpiece.
//                 </p>
//                 <p>
//                     The Taj Mahal's design incorporates elements from Persian, Islamic, and Indian architectural styles, making it a symbol of the fusion of cultural influences. It is also a UNESCO World Heritage Site and one of the Seven Wonders of the World.
//                 </p>
//                 <div className="tajmahal-images">
//                     <img src={TajMahalimage1} alt="Taj Mahal" onClick={() => handleImageClick(TajMahalimage1)} />
//                     <img src={TajMahalimage2} alt="Taj Mahal Upperview" onClick={() => handleImageClick(TajMahalimage2)} />
//                     <img src={TajMahalimage3} alt="Taj Mahal" onClick={() => handleImageClick(TajMahalimage3)} />
//                 </div>
//                 {!showMap && <button onClick={handleViewMap}>View Map</button>}
//                 {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
//             </div>
//             {showFullImage && (
//                 <div className="full-image-overlay">
//                     <div className="full-image-content">
//                         <span className="close-button" onClick={handleCloseImage}>&times;</span>
//                         <img src={fullImageUrl} alt="Full Taj Mahal" />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default TajMahal;







import React, { useState } from 'react';
import './tajmahal.css';
import TajMahalimage1 from './images/tajmahal1.jpg';
import TajMahalimage2 from './images/tajmahal2.jpg';
import TajMahalimage3 from './images/tajmahal3.jpg';

const TajMahal = () => {
    const [showMap, setShowMap] = useState(false);
    const [showFullImage, setShowFullImage] = useState(false);
    const [fullImageUrl, setFullImageUrl] = useState('');
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleViewMap = () => {
        setShowMap(true);
    };

    const handleImageClick = (imageSrc) => {
        setShowFullImage(true);
        setFullImageUrl(imageSrc);
    };

    const handleCloseImage = () => {
        setShowFullImage(false);
        setFullImageUrl('');
    };

    const handleViewReviews = async () => {
        setIsLoading(true);
        try {
            const placeId = 'ChIJkU2hYV6zDDkRvPhM3BjVq3w'; // Taj Mahal's place ID
            const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=YOUR_API_KEY`);
            const data = await response.json();
            if (data.status === 'OK') {
                setReviews(data.result.reviews);
            } else {
                console.error('Error fetching reviews:', data.error_message);
            }
        } catch (error) {
            console.error('Error fetching reviews:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="tajmahal-container">
            <h1>Taj Mahal</h1>
            <div className="tajmahal-info">
                <p>
                    The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor, Shah Jahan, to house the tomb of his favorite wife, Mumtaz Mahal.
                </p>
                <p>
                    The Taj Mahal is widely recognized as "the jewel of Muslim art in India" and remains a symbol of India's rich history and cultural heritage. It attracts millions of visitors from all over the world every year.
                </p>
                <p>
                    Construction of the Taj Mahal began in 1632 and was completed in 1653, employing thousands of artisans and craftsmen. The main mausoleum is flanked by four minarets and is set within a large garden with reflecting pools, making it an architectural masterpiece.
                </p>
                <p>
                    The Taj Mahal's design incorporates elements from Persian, Islamic, and Indian architectural styles, making it a symbol of the fusion of cultural influences. It is also a UNESCO World Heritage Site and one of the Seven Wonders of the World.
                </p>
                <div className="tajmahal-images">
                    <img src={TajMahalimage1} alt="Taj Mahal" onClick={() => handleImageClick(TajMahalimage1)} />
                    <img src={TajMahalimage2} alt="Taj Mahal Upperview" onClick={() => handleImageClick(TajMahalimage2)} />
                    <img src={TajMahalimage3} alt="Taj Mahal" onClick={() => handleImageClick(TajMahalimage3)} />
                </div>
                {!showMap && <button onClick={handleViewMap}>View Map</button>}
                <button onClick={handleViewReviews}>View Reviews and Ratings</button>
                {isLoading && <p>Loading...</p>}
                {showMap && <div id="map" style={{ width: '100%', height: '400px', marginTop: '20px' }}></div>}
                {reviews.length > 0 && (
                    <div id="reviews" className="google-reviews">
                        <h2>Google Reviews</h2>
                        <ul>
                            {reviews.map((review, index) => (
                                <li key={index}>
                                    <p>Rating: {review.rating}</p>
                                    <p>{review.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            {showFullImage && (
                <div className="full-image-overlay">
                    <div className="full-image-content">
                        <span className="close-button" onClick={handleCloseImage}>&times;</span>
                        <img src={fullImageUrl} alt="Full Taj Mahal" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default TajMahal;














