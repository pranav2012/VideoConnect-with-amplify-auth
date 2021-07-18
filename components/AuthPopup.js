import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import ConfirmUser from './Auth/ConfirmUser';
import {useState} from 'react';
import {Auth} from 'aws-amplify';
import '../AmpifyConfig';

export default function AuthPopup({setauthprompt, authpage, setauthpage, checkuser}) {
    
    const [mail, setmail] = useState("");
    const [password, setpassword] = useState("");
    const [error, seterror] = useState(null);
     
    const SignIn = async (email,pass) => { //aws auth to login
        if (email !=="" && pass !=="") {
            try {
                await Auth.signIn(email, pass);
                checkuser();
                setauthprompt(false);
                seterror(null);
            }
            catch (err) {
                seterror({err:err.message,count:"0"});
            }
        }
    }

    const signup = async (email, name, pass) => { // aws auth to register a new user
        if (email !=="" && pass !=="") {
            try {
                await Auth.signUp({
                    username:email, password:pass, attributes: { email, name }
                });
                setauthpage('confirmUser');
                setmail(email);
                setpassword(pass);
                seterror(null);
            }
            catch (err) {
                seterror({err:err.message,count:"1"});
            }
        }
    }

    const confirmuser = async (email,otp) => { //aws auth for verification of user
        if (email !=="" && otp !=="") {
            try {
                await Auth.confirmSignUp(email,otp);
                SignIn(mail,password);
            }
            catch (err) {
                seterror({err:err.message,count:"2"});
            }
        }
    }

    return ( //pop up for all authantication prompt's
        <div>
            <div onClick={() => setauthprompt(false)} className="fixed bg-gray-300 opacity-80 z-10 top-0 right-0 left-0 bottom-0"></div>
            <div style={{height:'max-content'}} className="fixed z-20 inset-x-0 top-20 bg-white rounded w-11/12 sm:w-3/4 md:w-3/5 mx-auto">
                <div onClick={() => setauthprompt(false)} className='absolute font-bold top-1 dim right-3 cursor-pointer'>&times;</div>
                {authpage === 'signin' && <Login error={error?error.count === "0"?error.err:"":""}  setauthpage={setauthpage} signin={SignIn}/>}
                {authpage === 'signup' && <SignUp error={error?error.count === "1"?error.err:"":""} setauthpage={setauthpage} signup={signup}/>}
                {authpage === 'confirmUser' && <ConfirmUser error={error?error.count === "2"?error.err:"":""} setauthpage={setauthpage} email={mail} confirmuser={confirmuser}/>}
            </div>
        </div>
    )
}
