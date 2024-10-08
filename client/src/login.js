import React from 'react'
import logo from './images/smalllogo.png'
import { callApi, errorResponse, setSession } from './main';

const popupwindowstyle={width:'300px',height:'450px', background:'white'};
const logostyle={width:'75px',height:'75px', position:'absolute', left:'115px', top: '10px'};
const logodivstyle={height: '100px'}
const space={height:'10px'}


function Login(){
    window.onload = function(){
        var login = document.getElementById('login');
        login.style.display="block";
        
        
    }

    function validate()
    {
        var T1=document.getElementById('T1');
        var T2=document.getElementById('T2');

        var url = "http://localhost:5000/login/signin";
        var data = JSON.stringify({
            emailid : T1.value,
            pwd : T2.value
        });
        callApi("POST", url, data, loginSuccess, errorResponse);
    }

    function loginSuccess(res)
    {
        var data = JSON.parse(res);
        if(data === 1)
        {
            var T1=document.getElementById('T1');
            setSession("sid", T1.value, 0.5);
            window.location.replace("/home");
        }
        else
            alert("Invalid Credentials!");
    }

    function registration(){
        var T1 = document.getElementById('T1');
        var T2 = document.getElementById('T2');
        T1.value="";
        T2.value="";
        
        var reg = document.getElementById('registration');
        var login = document.getElementById('login');
        login.style.display = "none";
        reg.style.display = "block";
    }

    // function register(){
    //     var RT1 = document.getElementById('RT1');
    //     var RT2 = document.getElementById('RT2');
    //     var RT3 = document.getElementById('RT3');
    //     var RT4 = document.getElementById('RT4');
    //     var RT5 = document.getElementById('RT5');
    //     var RT6 = document.getElementById('RT6');
    //     RT1.style.border="";
    //     RT2.style.border="";
    //     RT3.style.border="";
    //     RT4.style.border="";
    //     RT5.style.border="";
    //     RT6.style.border="";
    //     if(RT1.value==="")
    //     {
    //         RT1.style.border = "1px solid red";
    //         RT1.focus();
    //         return;
    //     }
    //     if(RT2.value==="")
    //     {
    //         RT2.style.border = "1px solid red";
    //         RT2.focus();
    //         return;
    //     }
    //     if(RT3.value==="")
    //     {
    //         RT3.style.border = "1px solid red";
    //         RT3.focus();
    //         return;
    //     }
    //     if(RT4.value==="")
    //     {
    //         RT4.style.border = "1px solid red";
    //         RT4.focus();
    //         return;
    //     }
    //     if(RT5.value==="")
    //     {
    //         RT5.style.border = "1px solid red";
    //         RT5.focus();
    //         return;
    //     }
    //     if(RT6.value==="")
    //     {
    //         RT6.style.border = "1px solid red";
    //         RT6.focus();
    //         return;
    //     }
    //     if(RT5.value!==RT6.value)
    //     {
    //         alert("Password and Re-type Password must be same");
    //         RT5.style.border="1px solid red";
    //         RT5.focus();
    //         return;
    //     }

    //     var url = "http://localhost:5000/registration/signup";
    //     var data = JSON.stringify({
    //         firstname : RT1.value,
    //         lastname : RT2.value,
    //         contactno : RT3.value,
    //         emailid : RT4.value,
    //         pwd : RT5.value
    //     });
    //     callApi("POST", url,  data, registeredSuccess, errorResponse);
    //     //alert("Registered successfullty...");

    //     RT1.value="";
    //     RT2.value="";
    //     RT3.value="";
    //     RT4.value="";
    //     RT5.value="";
    //     RT6.value="";

    //     var login = document.getElementById('login');
    //     var registration = document.getElementById('registration');
    //     registration.style.display = 'none';
    //     login.style.display = 'block';
    // }

    function register(){
        var RT1 = document.getElementById('RT1');
        var RT2 = document.getElementById('RT2');
        var RT3 = document.getElementById('RT3');
        var RT4 = document.getElementById('RT4');
        var RT5 = document.getElementById('RT5');
        var RT6 = document.getElementById('RT6');
        RT1.style.border="";
        RT2.style.border="";
        RT3.style.border="";
        RT4.style.border="";
        RT5.style.border="";
        RT6.style.border="";
        if(RT1.value==="")
        {
            RT1.style.border = "1px solid red";
            RT1.focus();
            return;
        }
        if(RT2.value==="")
        {
            RT2.style.border = "1px solid red";
            RT2.focus();
            return;
        }
        if(RT3.value==="" || RT3.value.length !== 10 || !(/^\d+$/.test(RT3.value)))
        {
            RT3.style.border = "1px solid red";
            RT3.focus();
            alert("Please enter a valid 10-digit contact number");
            return;
        }
        if(RT4.value==="")
        {
            RT4.style.border = "1px solid red";
            RT4.focus();
            return;
        }
        // Email validation
        var emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(RT4.value)) {
            alert("Please enter a valid email address");
            RT4.style.border = "1px solid red";
            RT4.focus();
            return;
        }
        if(RT5.value==="")
        {
            RT5.style.border = "1px solid red";
            RT5.focus();
            return;
        }
        if(RT6.value==="")
        {
            RT6.style.border = "1px solid red";
            RT6.focus();
            return;
        }
        if(RT5.value!==RT6.value)
        {
            alert("Password and Re-type Password must be same");
            RT5.style.border="1px solid red";
            RT5.focus();
            return;
        }
    
        var url = "http://localhost:5000/registration/signup";
        var data = JSON.stringify({
            firstname : RT1.value,
            lastname : RT2.value,
            contactno : RT3.value,
            emailid : RT4.value,
            pwd : RT5.value
        });
        callApi("POST", url,  data, registeredSuccess, errorResponse);
        //alert("Registered successfullty...");
    
        RT1.value="";
        RT2.value="";
        RT3.value="";
        RT4.value="";
        RT5.value="";
        RT6.value="";
    
        var login = document.getElementById('login');
        var registration = document.getElementById('registration');
        registration.style.display = 'none';
        login.style.display = 'block';
    }
    
    

    function registeredSuccess(res)
    {
        var data = JSON.parse(res);
        alert(data);
    }

    function forgotpassword(){
        var T1 = document.getElementById('T1');
        var T2 = document.getElementById('T2');
        T1.value="";
        T2.value="";
        
        var reg = document.getElementById('forgotpassword');
        var login = document.getElementById('login');
        login.style.display = "none";
        reg.style.display = "block";
    }

    // function fp2(){
    //     var ST1 = document.getElementById('ST1');
    //     var ST2 = document.getElementById('ST2');
    //     var ST3 = document.getElementById('ST3');
    //     ST1.style.border="";
    //     ST2.style.border="";
    //     ST3.style.border="";
    //     if(ST1.value==="")
    //     {
    //         ST1.style.border = "1px solid red";
    //         ST1.focus();
    //         return;
    //     }
    //     if(ST2.value==="")
    //     {
    //         ST2.style.border = "1px solid red";
    //         ST2.focus();
    //         return;
    //     }
    //     if(ST3.value==="")
    //     {
    //         ST3.style.border = "1px solid red";
    //         ST3.focus();
    //         return;
    //     }
    //     if(ST2.value!==ST3.value)
    //     {
    //         alert("New Password and Confirm Password must be same");
    //         ST2.style.border="1px solid red";
    //         ST2.focus();
    //         return;
    //     }

    //     var url = "http://localhost:5000/forgotpassword/fp2";
    //     var data = JSON.stringify({
    //         UserName : ST1.value,
    //         newpassword : ST2.value,
    //         confirmpassword : ST3.value
    //     });
    //     callApi("POST", url,  data, PasswordSuccess, errorResponse);
    //     //alert("Password Updated successfully...");

    //     ST1.value="";
    //     ST2.value="";
    //     ST3.value="";
    //     // resetPassword();

    //     var fp2 = document.getElementById('forgotpassword');
    //     var login = document.getElementById('login');
    //     fp2.style.display = "none";
    //     login.style.display = "block";

    // }
    function fp2(){
        var ST1 = document.getElementById('ST1').value;
        var ST2 = document.getElementById('ST2').value;
        var ST3 = document.getElementById('ST3').value;
        var OTP = document.getElementById('OTP').value; 
        // Assuming you have some validation here for ST1, ST2, and ST3
        // ...
    
        var url = "http://localhost:5000/forgotpassword/fp2";
        var data = JSON.stringify({
            UserName: ST1,
            newpassword: ST2,
            confirmpassword: ST3,
            OTP: OTP
        });
        callApi("POST", url, data, PasswordSuccess, errorResponse);
    }
    
    function PasswordSuccess(res)
    {
        var data = JSON.parse(res);
        alert(data);
    }

    return(
        <div className='full-height'>
            
            <div id='content' className='logincontent'>
                <div id='login' className='popup'>
                    <div id='popupwindow' className='popupwindow' style={popupwindowstyle} >
                        <div className='loginstyle1'>Login</div>
                        <div className='loginstyle2'>
                            <div style={logodivstyle}>
                                <img src={logo} alt='' style={logostyle} />
                            </div>
                            <div>Username*</div>
                            <div><input type='text' id='T1' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Password*</div>
                            <div><input type='password' id='T2' className='txtbox' /></div>
                            <div style={space}></div>
                            <div style={space}></div>
                            <div><button className='btn' onClick={validate}>Sign In</button></div>
                            <div style={space}></div>
                            <div style={space}></div>
                            <div style={space}></div>
                            <div>New user? <label className='linklabel' onClick={registration}>Register here</label></div>
                            <div>Forgot Password ?<label className='linklabel' onClick={forgotpassword}>Forgot Password</label></div>
                        </div>
                    </div>
                </div>
                <div id='forgotpassword' className='popup'>
                  <div id='popupwindow' className='popupwindow' style={popupwindowstyle} >
                      <div className='loginstyle1'>Forgot Password ?</div>
                      <div className='loginstyle2'>
                          <div>Email Address*</div>
                          <div><input type='text' id='ST1' className='txtbox' /></div>
                          <div style={space}></div>
                          <div>Enter OTP*</div>
                          <div><input type='text' id='OTP' className='txtbox' /></div>
                          <div style={space}></div>
                          <div>New Password*</div>
                          <div><input type='password' id='ST2' className='txtbox' /></div>
                          <div style={space}></div>
                          <div>Confirm Password*</div>
                          <div><input type='password' id='ST3' className='txtbox' /></div>
                          <div style={space}></div>
                          <div><button className='btn' onClick={fp2}>Reset</button></div>
                      </div>
                  </div>
                </div>
                <div id='registration' className='popup'>
                    <div id='registrationwindow' className='popupwindow'  style={popupwindowstyle}>
                        <div className='loginstyle1'>New Registration</div>
                        <div className='loginstyle2'>
                            <div>First Name*</div>
                            <div><input type='text' id='RT1' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Last Name*</div>
                            <div><input type='text' id='RT2' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Contact Number*</div>
                            <div><input type='text' id='RT3' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Email ID*</div>
                            <div><input type='text' id='RT4' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Password*</div>
                            <div><input type='password' id='RT5' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Re-type Password*</div>
                            <div><input type='password' id='RT6' className='txtbox' /></div>
                            <div style={space}></div>
                            <div><button className='btn' onClick={register}>Register</button></div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Login;