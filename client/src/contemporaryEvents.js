// import React from 'react';
// import PoliticsImage from './images/politics.jpg';
// import EconomyImage from './images/economy.jpg';
// import SocialImage from './images/social.jpg';
// import TechnologyImage from './images/technology.jpg';
// import CultureImage from './images/culture.jpg';
// import EnvironmentImage from './images/environment.jpeg';
// import HealthImage from './images/health.jpeg';
// import EducationImage from './images/education.jpg';
// import MediaImage from './images/media.jpeg';
// import SportsImage from './images/sports.jpeg';

// class ContemporaryEvents extends React.Component {
//     render() {
//         return (
//             <div className='contemporary-container'>
//                 <h1 className='contemporary-header'>Contemporary Events in India</h1>
//                 <div className='contemporary-content'>
//                     <div>
//                         <p>
//                             Political Developments: Elections, changes in government policies, diplomatic relations with other countries, and significant political movements such as protests or rallies.
//                         </p>
//                         <img src={PoliticsImage} alt="Political Developments" />
//                     </div>
//                     <div>
//                         <p>
//                             Economic Events: Stock market fluctuations, changes in economic policies, major business deals, mergers, acquisitions, and the launch of new economic initiatives or reforms.
//                         </p>
//                         <img src={EconomyImage} alt="Economic Events" />
//                     </div>
//                     <div>
//                         <p>
//                             Social Issues: Discussions and actions related to social justice, gender equality, LGBTQ+ rights, caste discrimination, poverty alleviation, education reforms, healthcare initiatives, and environmental conservation.
//                         </p>
//                         <img src={SocialImage} alt="Social Issues" />
//                     </div>
//                     <div>
//                         <p>
//                             Technological Advancements: Launches of new technology products, advancements in research and development, breakthroughs in science, space exploration, and discussions on issues like cybersecurity and data privacy.
//                         </p>
//                         <img src={TechnologyImage} alt="Technological Advancements" />
//                     </div>
//                     <div>
//                         <p>
//                             Cultural Events: Contemporary art exhibitions, music concerts, literature festivals, fashion shows, and other cultural gatherings that reflect current trends and expressions of creativity.
//                         </p>
//                         <img src={CultureImage} alt="Cultural Events" />
//                     </div>
//                     <div>
//                         <p>
//                             Environmental Events: Natural disasters, climate change discussions, environmental conservation efforts, and initiatives aimed at sustainable development.
//                         </p>
//                         <img src={EnvironmentImage} alt="Environmental Events" />
//                     </div>
//                     <div>
//                         <p>
//                             Health Events: Outbreaks of diseases, vaccination drives, healthcare infrastructure developments, and discussions on public health policies.
//                         </p>
//                         <img src={HealthImage} alt="Health Events" />
//                     </div>
//                     <div>
//                         <p>
//                             Education and Research: Innovations in education, advancements in academic research, educational policies, and debates on educational reforms.
//                         </p>
//                         <img src={EducationImage} alt="Education and Research" />
//                     </div>
//                     <div>
//                         <p>
//                             Media and Entertainment: Releases of movies, television shows, and digital content, controversies in the entertainment industry, and discussions on media ethics and freedom of expression.
//                         </p>
//                         <img src={MediaImage} alt="Media and Entertainment" />
//                     </div>
//                     <div>
//                         <p>
//                             Sports Events: Major sports tournaments, achievements of Indian athletes on the national and international stage, controversies in sports, and discussions on sports policies and infrastructure development.
//                         </p>
//                         <img src={SportsImage} alt="Sports Events" />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default ContemporaryEvents;



import React from 'react';
import PoliticsImage from './images/politics.jpg';
import EconomyImage from './images/economy.jpg';
import SocialImage from './images/social.jpg';
import TechnologyImage from './images/technology.jpg';
import CultureImage from './images/culture.jpg';
import EnvironmentImage from './images/environment.jpeg';
import HealthImage from './images/health.jpeg';
import EducationImage from './images/education.jpg';
import MediaImage from './images/media.jpeg';
import SportsImage from './images/sports.jpeg';

class ContemporaryEvents extends React.Component {
    render() {
        const pointStyle = {
            fontSize: '1.2em', // Increase font size
            fontWeight: 'bold', // Make points bold
        };

        return (
            <div className='contemporary-container'>
                <h1 className='contemporary-header'>Contemporary Events in India</h1>
                <div className='contemporary-content'>
                    <div>
                        <p style={pointStyle}>
                            <span style={{fontWeight: 'bold'}}>Political Developments:</span> Elections, changes in government policies, diplomatic relations with other countries, and significant political movements such as protests or rallies.
                        </p>
                        <img src={PoliticsImage} alt="Political Developments" />
                    </div>
                    <div>
                        <p style={pointStyle}>
                            <span style={{fontWeight: 'bold'}}>Economic Events:</span> Stock market fluctuations, changes in economic policies, major business deals, mergers, acquisitions, and the launch of new economic initiatives or reforms.
                        </p>
                        <img src={EconomyImage} alt="Economic Events" />
                    </div>
                    <div>
                        <p style={pointStyle}>
                            <span style={{fontWeight: 'bold'}}>Social Issues:</span> Discussions and actions related to social justice, gender equality, LGBTQ+ rights, caste discrimination, poverty alleviation, education reforms, healthcare initiatives, and environmental conservation.
                        </p>
                        <img src={SocialImage} alt="Social Issues" />
                    </div>
                    <div>
                        <p style={pointStyle}>
                            <span style={{fontWeight: 'bold'}}>Technological Advancements:</span> Launches of new technology products, advancements in research and development, breakthroughs in science, space exploration, and discussions on issues like cybersecurity and data privacy.
                        </p>
                        <img src={TechnologyImage} alt="Technological Advancements" />
                    </div>
                    <div>
                        <p style={pointStyle}>
                            <span style={{fontWeight: 'bold'}}>Cultural Events:</span> Contemporary art exhibitions, music concerts, literature festivals, fashion shows, and other cultural gatherings that reflect current trends and expressions of creativity.
                        </p>
                        <img src={CultureImage} alt="Cultural Events" />
                    </div>
                    <div>
                        <p style={pointStyle}>
                            <span style={{fontWeight: 'bold'}}>Environmental Events:</span> Natural disasters, climate change discussions, environmental conservation efforts, and initiatives aimed at sustainable development.
                        </p>
                        <img src={EnvironmentImage} alt="Environmental Events" />
                    </div>
                    <div>
                        <p style={pointStyle}>
                            <span style={{fontWeight: 'bold'}}>Health Events:</span> Outbreaks of diseases, vaccination drives, healthcare infrastructure developments, and discussions on public health policies.
                        </p>
                        <img src={HealthImage} alt="Health Events" />
                    </div>
                    <div>
                        <p style={pointStyle}>
                            <span style={{fontWeight: 'bold'}}>Education and Research:</span> Innovations in education, advancements in academic research, educational policies, and debates on educational reforms.
                        </p>
                        <img src={EducationImage} alt="Education and Research" />
                    </div>
                    <div>
                        <p style={pointStyle}>
                            <span style={{fontWeight: 'bold'}}>Media and Entertainment:</span> Releases of movies, television shows, and digital content, controversies in the entertainment industry, and discussions on media ethics and freedom of expression.
                        </p>
                        <img src={MediaImage} alt="Media and Entertainment" />
                    </div>
                    <div>
                        <p style={pointStyle}>
                            <span style={{fontWeight: 'bold'}}>Sports Events:</span> Major sports tournaments, achievements of Indian athletes on the national and international stage, controversies in sports, and discussions on sports policies and infrastructure development.
                        </p>
                        <img src={SportsImage} alt="Sports Events" />
                    </div>
                </div>
            </div>
        );
    }
}

export default ContemporaryEvents;
