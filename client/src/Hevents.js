// import React from 'react';
// import './Diwali.css';
// import diwaliImage1 from './images/diwali1.jpg';
// import diwaliImage2 from './images/diwali2.jpg'; // Import your second image
// // import fireworksBackground from './videos/diwaligif.gif';

// class Hevents extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentImageIndex: 0,
//             images: [diwaliImage1, diwaliImage2] // Array of images
//         };
//     }


//     componentDidMount() {
//         this.imageInterval = setInterval(() => {
//             this.setState(prevState => ({
//                 currentImageIndex: (prevState.currentImageIndex + 1) % prevState.images.length
//             }));
//         }, 1000); // Change image every 3 seconds (adjust as needed)

//         // Set timeout to remove background after 5 seconds
//         // setTimeout(() => {
//         //     this.setState({ showBackground: false });
//         // }, 5000);
//     }


//     componentWillUnmount() {
//         clearInterval(this.imageInterval);
//     }

//     render() {
//         return (
//             <div className='diwali-container'>
//                 <h1 className='diwali-header'>Historical Events Of India</h1>
//                 {/* <div className='diwali-content' style={{ backgroundImage: `url(${fireworksBackground})` }}> */}
//                  <div className='diwali-content'>
//                     <p>
//                     1.Indus Valley Civilization (c. 3300–1300 BCE): One of the world's oldest urban civilizations, characterized by its sophisticated urban planning, trade networks, and drainage systems.
//                     </p>
//                     <img src={this.state.images[this.state.currentImageIndex]} alt="Diwali Celebration" className="diwali-image" />
//                     <p>
//                     2.The Vedic Period (c. 1500–500 BCE): Marked by the composition of the Vedas, the oldest sacred texts of Hinduism, and the emergence of early Hindu society and philosophy.
//                     </p>
//                     <p>
//                     3.Maurya Empire (c. 322–185 BCE): Established by Chandragupta Maurya, it was one of the largest empires in ancient India, known for its centralized administration under Emperor Ashoka, who famously embraced Buddhism.
//                     </p>
//                     <p>
//                     4.Gupta Empire (c. 320–550 CE): Known as the "Golden Age" of India, characterized by remarkable achievements in science, mathematics, art, and literature, including the decimal numeral system, the concept of zero, and the Kama Sutra.
//                     </p>
//                     <p>
//                     5.Islamic Invasions and Sultanates (c. 12th–16th centuries CE): Beginning with the invasion of Mahmud of Ghazni, this period saw the establishment of various Islamic sultanates in India, leading to significant cultural and religious interactions.
//                     </p>
//                     <p>
//                     6.Mughal Empire (1526–1857): Founded by Babur, the Mughals ruled over much of the Indian subcontinent for over three centuries, leaving a lasting legacy in architecture, art, and culture, including the Taj Mahal.
//                     </p>
//                     <p>
//                     7.British East India Company Rule (1757–1858): The British East India Company gradually expanded its control over India through diplomacy and warfare, leading to the establishment of British colonial rule, which significantly transformed Indian society and economy.
//                     </p>
//                     <p>
//                     8.Indian Rebellion of 1857: Also known as the Sepoy Mutiny, it was a major uprising against British rule, which although ultimately unsuccessful, marked the beginning of the end of the British East India Company's rule in India.
//                     </p>
//                     <p>
//                     9.Indian Independence Movement (late 19th–mid 20th century): A series of movements and campaigns aimed at ending British colonial rule, led by figures such as Mahatma Gandhi, Jawaharlal Nehru, and Subhas Chandra Bose, culminating in India's independence in 1947.
//                     </p>
//                     <p>
//                     10.Partition of India (1947): The division of British India into the independent nations of India and Pakistan, resulting in widespread violence, displacement, and the largest mass migration in human history.
//                     </p>
//                     <p>
//                     11.Formation of the Republic of India (1950): India adopted a democratic constitution, becoming a sovereign socialist secular democratic republic, and Dr. Rajendra Prasad became its first President.
//                     </p>
//                     <p>
//                     11.Formation of the Republic of India (1950): India adopted a democratic constitution, becoming a sovereign socialist secular democratic republic, and Dr. Rajendra Prasad became its first President.
//                     </p>
//                     <p>
//                     12.Indo-Pakistani Wars and Conflicts: Including the wars of 1947, 1965, and 1971, as well as the Kargil conflict in 1999, these events have shaped the geopolitics of the Indian subcontinent.
//                     </p>
//                     <p>
//                     13.Economic Liberalization (1991): India initiated economic reforms to liberalize its economy, leading to significant economic growth and integration into the global economy.
//                     </p>
                    
//                 </div>
//             </div>
//         );
//     }
// }

// export default Hevents;
// import React from 'react';
// // import './Diwali.css';

// class Hevents extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentImageIndex: 0,
//             images: [] // Removed the images array
//         };
//     }

//     componentDidMount() {
//         // Removed imageInterval setup
//     }

//     componentWillUnmount() {
//         // Removed clearInterval
//     }

//     render() {
//         return (
//             <div className='diwali-container'>
//                 <h1 className='diwali-header'>Historical Events Of India</h1>
//                 <div className='diwali-content'>
//                     <p>
//                     1.Indus Valley Civilization (c. 3300-1300 BCE): One of the world's oldest urban civilizations, characterized by its sophisticated urban planning, trade networks, and drainage systems.
//                     </p>
//                     <p>
//                     2.The Vedic Period (c. 1500-500 BCE): Marked by the composition of the Vedas, the oldest sacred texts of Hinduism, and the emergence of early Hindu society and philosophy.
//                     </p>
//                     <p>
//                     3.Maurya Empire (c. 322-185 BCE): Established by Chandragupta Maurya, it was one of the largest empires in ancient India, known for its centralized administration under Emperor Ashoka, who famously embraced Buddhism.
//                     </p>
//                     <p>
//                     4.Gupta Empire (c. 320-550 CE): Known as the "Golden Age" of India, characterized by remarkable achievements in science, mathematics, art, and literature, including the decimal numeral system, the concept of zero, and the Kama Sutra.
//                     </p>
//                     <p>
//                     5.Islamic Invasions and Sultanates (c. 12th-16th centuries CE): Beginning with the invasion of Mahmud of Ghazni, this period saw the establishment of various Islamic sultanates in India, leading to significant cultural and religious interactions.
//                     </p>
//                     <p>
//                     6.Mughal Empire (1526-1857): Founded by Babur, the Mughals ruled over much of the Indian subcontinent for over three centuries, leaving a lasting legacy in architecture, art, and culture, including the Taj Mahal.
//                     </p>
//                     <p>
//                     7.British East India Company Rule (1757-1858): The British East India Company gradually expanded its control over India through diplomacy and warfare, leading to the establishment of British colonial rule, which significantly transformed Indian society and economy.
//                     </p>
//                     <p>
//                     8.Indian Rebellion of 1857: Also known as the Sepoy Mutiny, it was a major uprising against British rule, which although ultimately unsuccessful, marked the beginning of the end of the British East India Company's rule in India.
//                     </p>
//                     <p>
//                     9.Indian Independence Movement (late 19th-mid 20th century): A series of movements and campaigns aimed at ending British colonial rule, led by figures such as Mahatma Gandhi, Jawaharlal Nehru, and Subhas Chandra Bose, culminating in India's independence in 1947.
//                     </p>
//                     <p>
//                     10.Partition of India (1947): The division of British India into the independent nations of India and Pakistan, resulting in widespread violence, displacement, and the largest mass migration in human history.
//                     </p>
//                     <p>
//                     11.Formation of the Republic of India (1950): India adopted a democratic constitution, becoming a sovereign socialist secular democratic republic, and Dr. Rajendra Prasad became its first President.
//                     </p>
//                     <p>
//                     12.Indo-Pakistani Wars and Conflicts: Including the wars of 1947, 1965, and 1971, as well as the Kargil conflict in 1999, these events have shaped the geopolitics of the Indian subcontinent.
//                     </p>
//                     <p>
//                     13.Economic Liberalization (1991): India initiated economic reforms to liberalize its economy, leading to significant economic growth and integration into the global economy.
//                     </p>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Hevents;

import React from 'react';
import IndusValley from './images/indus_valley.png';
import VedicPeriod from './images/vedic_period.jpg';
import MauryaEmpire from './images/maurya_empire.jpeg';
import GuptaEmpire from './images/gupta_empire.jpg';
import IslamicInvasions from './images/islamic_invasions.jpeg';
import MughalEmpire from './images/mughal_empire.jpg';
import BritishRule from './images/british_rule.jpeg';
import IndependenceMovement from './images/independence_movement.jpg';
import PartitionOfIndia from './images/partition_of_india.jpeg';
import RepublicOfIndia from './images/republic_of_india.jpg';
import IndoPakWars from './images/indo_pak_wars.png';
import EconomicLiberalization from './images/economic_liberalization.jpg';

class Hevents extends React.Component {
    render() {
        return (
            <div className='diwali-container'>
                <h1 className='diwali-header'>Historical Events Of India</h1>
                <div className='diwali-content'>
                    <div>
                        <p>
                            1. Indus Valley Civilization (c. 3300-1300 BCE): One of the world's oldest urban civilizations, characterized by its sophisticated urban planning, trade networks, and drainage systems.
                        </p>
                        <img src={IndusValley} alt="Indus Valley Civilization" />
                    </div>
                    <div>
                        <p>
                            2. The Vedic Period (c. 1500-500 BCE): Marked by the composition of the Vedas, the oldest sacred texts of Hinduism, and the emergence of early Hindu society and philosophy.
                        </p>
                        <img src={VedicPeriod} alt="Vedic Period" />
                    </div>
                    <div>
                        <p>
                            3. Maurya Empire (c. 322-185 BCE): Established by Chandragupta Maurya, it was one of the largest empires in ancient India, known for its centralized administration under Emperor Ashoka, who famously embraced Buddhism.
                        </p>
                        <img src={MauryaEmpire} alt="Maurya Empire" />
                    </div>
                    <div>
                        <p>
                            4. Gupta Empire (c. 320-550 CE): Known as the "Golden Age" of India, characterized by remarkable achievements in science, mathematics, art, and literature, including the decimal numeral system, the concept of zero, and the Kama Sutra.
                        </p>
                        <img src={GuptaEmpire} alt="Gupta Empire" />
                    </div>
                    <div>
                        <p>
                            5. Islamic Invasions and Sultanates (c. 12th-16th centuries CE): Beginning with the invasion of Mahmud of Ghazni, this period saw the establishment of various Islamic sultanates in India, leading to significant cultural and religious interactions.
                        </p>
                        <img src={IslamicInvasions} alt="Islamic Invasions and Sultanates" />
                    </div>
                    <div>
                        <p>
                            6. Mughal Empire (1526-1857): Founded by Babur, the Mughals ruled over much of the Indian subcontinent for over three centuries, leaving a lasting legacy in architecture, art, and culture, including the Taj Mahal.
                        </p>
                        <img src={MughalEmpire} alt="Mughal Empire" />
                    </div>
                    <div>
                        <p>
                            7. British East India Company Rule (1757-1858): The British East India Company gradually expanded its control over India through diplomacy and warfare, leading to the establishment of British colonial rule, which significantly transformed Indian society and economy.
                        </p>
                        <img src={BritishRule} alt="British East India Company Rule" />
                    </div>
                    <div>
                        <p>
                            8. Indian Rebellion of 1857: Also known as the Sepoy Mutiny, it was a major uprising against British rule, which although ultimately unsuccessful, marked the beginning of the end of the British East India Company's rule in India.
                        </p>
                        <img src={IndependenceMovement} alt="Indian Rebellion of 1857" />
                    </div>
                    <div>
                        <p>
                            9. Indian Independence Movement (late 19th-mid 20th century): A series of movements and campaigns aimed at ending British colonial rule, led by figures such as Mahatma Gandhi, Jawaharlal Nehru, and Subhas Chandra Bose, culminating in India's independence in 1947.
                        </p>
                        <img src={PartitionOfIndia} alt="Indian Independence Movement" />
                    </div>
                    <div>
                        <p>
                            10. Partition of India (1947): The division of British India into the independent nations of India and Pakistan, resulting in widespread violence, displacement, and the largest mass migration in human history.
                        </p>
                        <img src={RepublicOfIndia} alt="Partition of India" />
                    </div>
                    <div>
                        <p>
                            11. Formation of the Republic of India (1950): India adopted a democratic constitution, becoming a sovereign socialist secular democratic republic, and Dr. Rajendra Prasad became its first President.
                        </p>
                        <img src={IndoPakWars} alt="Formation of the Republic of India" />
                    </div>
                    <div>
                        <p>
                            12. Indo-Pakistani Wars and Conflicts: Including the wars of 1947, 1965, and 1971, as well as the Kargil conflict in 1999, these events have shaped the geopolitics of the Indian subcontinent.
                        </p>
                        <img src={PartitionOfIndia} alt="Indo-Pakistani Wars and Conflicts" />
                    </div>
                    <div>
                        <p>
                            13. Economic Liberalization (1991): India initiated economic reforms to liberalize its economy, leading to significant economic growth and integration into the global economy.
                        </p>
                        <img src={EconomicLiberalization} alt="Economic Liberalization" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Hevents;
