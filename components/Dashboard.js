import PublicView from '../components/Dashboard/PublicView';
import UserView from '../components/Dashboard/UserView';
import { useState } from 'react';
import Header from '../components/Header';
import AuthPopup from '../components/AuthPopup';

export default function Dashboard({auth, checkuser, setauth}) {
    const [authprompt, setauthprompt] = useState(false);
    const [authpage, setauthpage] = useState("signin");
    const [refresh, setrefresh] = useState(false);

    return ( //sub container for all components
        <div>
            <Header auth={auth} setrefresh={setrefresh} setauth={setauth} setauthprompt={setauthprompt} setauthpage={setauthpage}/>
            {authprompt && <AuthPopup checkuser={checkuser} setauthprompt={setauthprompt} authpage={authpage} setauthpage={setauthpage}/>}
            <PublicView refresh={refresh}/> 
           {auth && <UserView refresh={refresh} />}
        </div>
    )
}
