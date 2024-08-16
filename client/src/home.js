// import React from 'react';
// import './home.css';
// import logouticon from './images/logout.png';
// import { callApi, errorResponse, getSession, setSession } from './main';
// import menuicon from './images/menu.png';

// const HS1 = { "padding-left": "5px", "font-weight": "bold" };
// const HS2 = { "float": "right", "padding-right": "5px", "cursor": "pointer" };
// const HS3 = { "float": "right", "height": "16px", "margin-top": "6px", "cursor": "pointer" }
// const HS4 = { "float": "right", "padding-right": "10px" }
// const searchStyle = { "flex": "1", "text-align": "center", "margin": "0 10px" }

// export function loadMenu(res) {
//     var data = JSON.parse(res);
//     var menuitems = "";
//     for (var x in data) {
//         menuitems += `<li>
//                         <label id='${data[x].mid}L' >${data[x].mtitle}</label>
//                         <div id='${data[x].mid}' class='smenu'></div>
//                       </li>`;
//     }
//     var mlist = document.getElementById('mlist');
//     mlist.innerHTML = menuitems;

//     for (x in data) {
//         document.getElementById(`${data[x].mid}L`).addEventListener("click", showSMenu.bind(null, data[x].mid));
//     }
// }

// export function showSMenu(mid) {
//     var surl = "http://localhost:5000/home/menus";
//     var ipdata = JSON.stringify({
//         mid: mid
//     });
//     callApi("POST", surl, ipdata, loadSMenu, errorResponse);

//     var smenu = document.getElementById(mid);
//     if (smenu.style.display === "block")
//         smenu.style.display = "none";
//     else
//         smenu.style.display = "block";
// }

// export function loadSMenu(res) {
//     var data = JSON.parse(res);
//     var smenuitems = "";
//     for (var x in data) {
//         smenuitems += `<label id='${data[x].smid}'>${data[x].smtitle}</label>`;
//     }
//     var smenu = document.getElementById(`${data[x].mid}`);
//     smenu.innerHTML = smenuitems;

//     for (x in data) {
//         document.getElementById(`${data[x].smid}`).addEventListener("click", redirectToSubMenu.bind(null, data[x].smid));
//     }
// }

// export function redirectToSubMenu(smid) {
//     window.location.href = `/${smid}`; // Redirect to the submenu
// }

// export function loadModule(smid) {
//     var titlebar = document.getElementById('titlebar');
//     var module = document.getElementById('module');
//     switch (smid) {
//         case "M01103":
//             module.src = "/changepassword";
//             titlebar.innerText = "Change Password";
//             break;
//         case "M01102":
//             module.src = "/myprofile";
//             titlebar.innerText = "My Profile";
//             break;
//         case "M10301":
//             module.src = "/andhra";
//             titlebar.innerText = "Andhra Pradhesh";
//             break;
//         case "M10302":
//             module.src = "/aruna";
//             titlebar.innerText = "Arunachal Pradhesh";
//             break;
//         case "M10304":
//             module.src = "/Bihar";
//             titlebar.innerText = "Bihar";
//             break;
//         case "M10303":
//             module.src = "/Assam";
//             titlebar.innerText = "Assam";
//             break;
//         case "M10305":
//             module.src = "/Tamilnadu";
//             titlebar.innerText = "Tamilnadu";
//             break;
//         case "M10306":
//             module.src = "/Telangana";
//             titlebar.innerText = "Telangana";
//             break;
//         case "M10307":
//             module.src = "/UttarPradesh";
//             titlebar.innerText = "UttarPradesh";
//             break;
//         case "M10308":
//             module.src = "/Uttarakhand";
//             titlebar.innerText = "Uttarakhand";
//             break;
//         case "M10309":
//             module.src = "/WestBengal";
//             titlebar.innerText = "WestBengal";
//             break;
//         case "M103010":
//             module.src = "/Manipur";
//             titlebar.innerText = "Manipur";
//             break;
//         case "M103011":
//             module.src = "/Meghalaya";
//             titlebar.innerText = "Meghalaya";
//             break;
//         case "M103012":
//             module.src = "/Odisha";
//             titlebar.innerText = "Odisha";
//             break;
//         case "M103013":
//             module.src = "/Punjab";
//             titlebar.innerText = "Punjab";
//             break;
//         case "M103014":
//             module.src = "/Rajasthan";
//             titlebar.innerText = "Rajasthan";
//             break;

//         case "M00101": // New case for Book Appointment
//             module.src = "/Diwali1";
//             titlebar.innerText = "Diwali";
//             break;
//         case "M00102": // New case for Book Appointment
//             module.src = "/Holi";
//             titlebar.innerText = "Holi";
//             break;
//         case "M00103": // New case for Book Appointment
//             module.src = "/Ramzan";
//             titlebar.innerText = "Ramzan";
//             break;
//         case "M00104": // New case for Book Appointment
//             module.src = "/Christmas";
//             titlebar.innerText = "Christmas";
//             break;
//         case "M00105": // New case for Book Appointment
//             module.src = "./festivalcalendar";
//             titlebar.innerText = "Festival Calender";
//             break;
//         case "M10101": // New case for Book Appointment
//             module.src = "/tajmahal";
//             titlebar.innerText = "Taj Mahal";
//             break;
//         case "M10102": // New case for Book Appointment
//             module.src = "/redfort";
//             titlebar.innerText = "Red Fort";
//             break;
//         case "M10103": // New case for Book Appointment
//             module.src = "/jamamasjid";
//             titlebar.innerText = "Jama Masjid";
//             break;
//         case "M10104": // New case for Book Appointment
//             module.src = "/basilica_of_bom_jesus";
//             titlebar.innerText = "Basilica of Bom Jesus";
//             break;
//         case "M10105": // New case for Book Appointment
//             module.src = "/viewall";
//             titlebar.innerText = "View All";
//             break;

//         default:
//             module.src = "";
//             titlebar.innerText = "";
//     }
// }

// class Home extends React.Component {
//     constructor() {
//         super();
//         this.sid = getSession("sid");
//         if (this.sid === "")
//             window.location.replace("/");

//         var url = "http://localhost:5000/home/uname";
//         var data = JSON.stringify({
//             emailid: this.sid
//         });
//         callApi("POST", url, data, this.loadUname, errorResponse);

//         url = "http://localhost:5000/home/menu";
//         callApi("POST", url, "", loadMenu, errorResponse);
//     }

//     loadUname(res) {
//         var data = JSON.parse(res);
//         var HL1 = document.getElementById("HL1");
//         HL1.innerText = `${data[0].firstname} ${data[0].lastname}`
//     }

//     logout() {
//         setSession("sid", "", -1);
//         window.location.replace("/");
//     }

//     handleSearch(event) {
//         const searchTerm = event.target.value.toLowerCase();
//         const menuItems = document.querySelectorAll('.smenu label');
//         menuItems.forEach(item => {
//             if (item.innerText.toLowerCase().includes(searchTerm)) {
//                 item.addEventListener('click', () => {
//                     redirectToSubMenu(item.id);
//                 });
//             }
//         });
//     }

//     render() {
//         return (
//             <div className='full-height'>
//                 <div className='header'>
//                     <label style={HS1}>KL University | Indian Culture Management System</label>
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         style={searchStyle}
//                         onChange={(event) => this.handleSearch(event)}
//                     />
//                     <label style={HS2} onClick={this.logout}>Logout</label>
//                     <img src={logouticon} alt='' style={HS3} onClick={this.logout} />
//                     <label id='HL1' style={HS4}></label>
//                 </div>
//                 <div className='content'>
//                     <div className='menubar'>
//                         <div className='menuheader'>
//                             <img src={menuicon} alt='' />
//                             <label>MENU</label>
//                         </div>
//                         <div className='menu'>
//                             <nav><ul id='mlist' className='mlist'></ul></nav>
//                         </div>
//                     </div>
//                     <div className='outlet'>
//                         <div id='titlebar'></div>
//                         <iframe id='module' src=""></iframe>
//                     </div>
//                 </div>
//                 <div className='footer'>
//                     Copyright @ KL University. All rights reserved.
//                 </div>
//             </div>
//         );
//     }
// }

// export default Home;

import React from 'react'
import './home.css'
import logouticon from './images/logout.png'
import searchicon from './images/download.png' // Add your search icon image path here
import { callApi, errorResponse, getSession, setSession } from './main';
import menuicon from './images/menu.png'

const HS1 = {"padding-left" : "5px", "font-weight" : "bold"};
const HS2 = {"float" : "right", "padding-right" : "5px", "cursor" : "pointer"};
const HS3 = {"float" : "right", "height" : "16px", "margin-top" : "6px", "cursor" : "pointer"}
const HS4 = {"float" : "right", "padding-right" : "10px"}
const HS5 = {"float" : "right", "margin-right" : "10px", "margin-top" : "8px"}


export function loadMenu(res) {
    var data = JSON.parse(res);
    var menuitems = ""; 
    for (var x in data) {
        const submenus = data[x].submenus || []; // Check if submenus is defined
        menuitems += `<li>
                        <label id='${data[x].mid}L' >${data[x].mtitle}</label>
                        <div id='${data[x].mid}' class='smenu'></div>
                      </li>`;
    }
    var mlist = document.getElementById('mlist');
    mlist.innerHTML = menuitems;

    for (x in data) {
        document.getElementById(`${data[x].mid}L`).addEventListener("click", showSMenu.bind(null, data[x].mid));
    }

    // Search functionality
    const searchInput = document.querySelector('input[type="text"]');
    searchInput.addEventListener('input', function(event) {
        const searchValue = event.target.value.toLowerCase();
        const filteredData = data.filter(item => item.mtitle.toLowerCase().includes(searchValue) || (item.submenus && item.submenus.some(submenu => submenu.smtitle.toLowerCase().includes(searchValue))));
        renderFilteredMenu(filteredData);
    });
}

function renderFilteredMenu(filteredData) {
    var menuitems = ""; 
    for (var x in filteredData) {
        menuitems += `<li>
                        <label id='${filteredData[x].mid}L' >${filteredData[x].mtitle}</label>
                        <div id='${filteredData[x].mid}' class='smenu'></div>
                      </li>`;
    }
    var mlist = document.getElementById('mlist');
    mlist.innerHTML = menuitems;

    for (x in filteredData) {
        document.getElementById(`${filteredData[x].mid}L`).addEventListener("click", showSMenu.bind(null, filteredData[x].mid));
    }
}

export function showSMenu(mid) {
    var surl = "http://localhost:5000/home/menus";
    var ipdata = JSON.stringify({
        mid: mid
    });
    callApi("POST", surl, ipdata, loadSMenu, errorResponse);

    var smenu = document.getElementById(mid);
    if (smenu.style.display === "block")
        smenu.style.display = "none";
    else
        smenu.style.display = "block";
}

export function loadSMenu(res) {
    var data = JSON.parse(res);
    var smenuitems = "";
    for (var x in data) {
        smenuitems += `<label id='${data[x].smid}'>${data[x].smtitle}</label>`;
    }
    var smenu = document.getElementById(`${data[x].mid}`);
    smenu.innerHTML = smenuitems;

    for (x in data) {
        document.getElementById(`${data[x].smid}`).addEventListener("click", loadModule.bind(null, data[x].smid));
    }
}

export function loadModule1(smid) {
    window.location.href = `/${smid}`; // Redirect to the submenu
}


export function loadModule(smid) {
    var titlebar = document.getElementById('titlebar');
    var module = document.getElementById('module');
    switch (smid) {
        case "M01103":
            module.src = "/changepassword";
            titlebar.innerText = "Change Password";
            break;
        case "M01102":
            module.src = "/myprofile";
            titlebar.innerText = "My Profile";
            break;
        case "M10301":
            module.src = "/andhra";
            titlebar.innerText = "Andhra Pradhesh";
            break;
        case "M10302":
            module.src = "/aruna";
            titlebar.innerText = "Arunachal Pradhesh";
            break;
        case "M10304":
            module.src = "/Bihar";
            titlebar.innerText = "Bihar";
            break;
        case "M10303":
            module.src = "/Assam";
            titlebar.innerText = "Assam";
            break;
        case "M10305":
            module.src = "/Tamilnadu";
            titlebar.innerText = "Tamilnadu";
            break;
        case "M10306":
            module.src = "/Telangana";
            titlebar.innerText = "Telangana";
            break;
        case "M10307":
            module.src = "/UttarPradesh";
            titlebar.innerText = "UttarPradesh";
            break;
        case "M10308":
            module.src = "/Uttarakhand";
            titlebar.innerText = "Uttarakhand";
            break;
        case "M10309":
            module.src = "/WestBengal";
            titlebar.innerText = "WestBengal";
            break;
        case "M103010":
            module.src = "/Manipur";
            titlebar.innerText = "Manipur";
            break;
        case "M103011":
            module.src = "/Meghalaya";
            titlebar.innerText = "Meghalaya";
            break;
        case "M103012":
            module.src = "/Odisha";
            titlebar.innerText = "Odisha";
            break;
        case "M103013":
            module.src = "/Punjab";
            titlebar.innerText = "Punjab";
            break;
        case "M103014":
            module.src = "/Rajasthan";
            titlebar.innerText = "Rajasthan";
            break;

        case "M00101": // New case for Book Appointment
            module.src = "/Diwali1";
            titlebar.innerText = "Diwali";
            break;
        case "M00102": // New case for Book Appointment
            module.src = "/Holi";
            titlebar.innerText = "Holi";
            break;
        case "M00103": // New case for Book Appointment
            module.src = "/Ramzan";
            titlebar.innerText = "Ramzan";
            break;
        case "M00104": // New case for Book Appointment
            module.src = "/Christmas";
            titlebar.innerText = "Christmas";
            break;
        case "M00105": // New case for Book Appointment
            module.src = "./festivalcalendar";
            titlebar.innerText = "Festival Calender";
            break;
        case "M10101": // New case for Book Appointment
            module.src = "/tajmahal";
            titlebar.innerText = "Taj Mahal";
            break;
        case "M10102": // New case for Book Appointment
            module.src = "/redfort";
            titlebar.innerText = "Red Fort";
            break;
        case "M10103": // New case for Book Appointment
            module.src = "/jamamasjid";
            titlebar.innerText = "Jama Masjid";
            break;
        case "M10104": // New case for Book Appointment
            module.src = "/basilica_of_bom_jesus";
            titlebar.innerText = "Basilica of Bom Jesus";
            break;
        case "M10105": // New case for Book Appointment
            module.src = "/viewall";
            titlebar.innerText = "View All";
            break;
            case "S00102":
            module.src = "/Hevents";
            titlebar.innerText = "Historical Events"
            break;
            case "S00101":
            module.src = "contemporaryEvents";
            titlebar.innerText = "ContemporaryEvents"
            break;
            case "M00401":
                module.src = "/Faqs";
                titlebar.innerText = "FAQS"
                break;
                case "M00402":
                    module.src = "/aboutus";
                    titlebar.innerText = "AboutUs"
                    break;

        default:
            module.src = "";
            titlebar.innerText = "";
    }
}


class Home extends React.Component
{
    constructor()
    {
        super();
        this.sid = getSession("sid");
        //alert(this.sid);
        if(this.sid === "")
            window.location.replace("/");

        var url = "http://localhost:5000/home/uname";
        var data = JSON.stringify({
            emailid : this.sid
        });
        callApi("POST", url, data, this.loadUname, errorResponse);

        url = "http://localhost:5000/home/menu";
        callApi("POST", url, "", loadMenu, errorResponse);
    }

    loadUname(res)
    {
        var data = JSON.parse(res);
        var HL1 = document.getElementById("HL1");
        HL1.innerText = `${data[0].firstname} ${data[0].lastname}`
    }

    logout()
    {
        setSession("sid", "", -1);
        window.location.replace("/");
    }

    render()
    {
        return(
            <div className='full-height'>
                <div className='header'>
                    <label style={HS1}>KL University | Indian Culture Management System</label>
                    <input type="text" placeholder="Search..." style={HS5} /> {/* Added search input */}
                    <label style={HS2} onClick={this.logout}>Logout</label>
                    <img src={logouticon} alt='' style={HS3} onClick={this.logout} />
                    <label id='HL1' style={HS4}></label>
                </div>
                <div className='content'>
                    <div className='menubar'>
                        <div className='menuheader'>
                            <img src={menuicon} alt='' />
                            <label>MENU</label>
                        </div>
                        <div className='menu'>
                            <nav><ul id='mlist' className='mlist'></ul></nav>
                        </div>
                    </div>
                    <div className='outlet'>
                        <div id='titlebar'></div>
                        <iframe id='module' src="" ></iframe>
                    </div>
                </div>
                <div className='footer'>
                    Copyright @ KL University. All rights reserved.
                </div>
            </div>
        );
    }
    
}

export default Home;

