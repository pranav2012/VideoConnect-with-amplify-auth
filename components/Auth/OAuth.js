import {AiFillFacebook} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc';
import { useEffect } from 'react';
import {Auth} from 'aws-amplify';
import '../../AmpifyConfig';

export default function OAuth({oauthtype}) {

    return (
        <div>
            <div onClick={() => {Auth.federatedSignIn({provider: "Facebook"}) }} className="mt-4 w-3/5 cursor-pointer px-2 mx-auto bg-blue-800 p-1 rounded">
                <div className="flex mx-auto justify-center items-center text-white">
                    <AiFillFacebook />
                    <p className="ml-1 sm:ml-2 text-xs md:text-sm">{`${oauthtype=="signin"?'Continue with Facebook':'Sign Up with Facebook'}`}</p>
                </div>
            </div>
            <div onClick={() => { Auth.federatedSignIn({provider: "Google"}) }} className="mt-4 cursor-pointer w-3/5 px-2 mx-auto border border-gray-600 p-1  rounded">
                <div className="flex justify-center items-center">
                    <FcGoogle />
                    <p className="ml-1 sm:ml-2 text-xs md:text-sm">{`${oauthtype=="signin"?'Continue with Google':'Sign Up with Google'}`}</p>
                </div>
            </div>
        </div>
    )
}
