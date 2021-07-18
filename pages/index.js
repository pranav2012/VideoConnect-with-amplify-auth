import Dashboard from "../components/Dashboard";
import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import '../AmpifyConfig';
import Head from 'next/head';

export default function Home() {

    const [auth, setauth] = useState(false);

    useEffect(() => {
        checkuser();
    }, []);

    const checkuser = async () => { // checking is user logged in or not
        let user = await Auth.currentAuthenticatedUser();
        if (user) setauth(true);
        else setauth(false);
    }

    return ( //container for the whole app
        <div>
            <Head>
                <title>Celebrythm - Task</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Dashboard checkuser={checkuser} setauth={setauth} auth={auth} /> 
        </div>
    )
}
