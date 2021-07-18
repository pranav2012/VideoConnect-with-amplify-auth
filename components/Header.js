import Link from 'next/Link';
import { RiUploadCloudFill,RiLogoutCircleRLine } from 'react-icons/ri';
import UploadVideo from '../components/Dashboard/UploadVideo';
import { useRef } from 'react';
import {Auth} from 'aws-amplify';
import '../AmpifyConfig';

export default function Header({ auth, setauthprompt, setauthpage, setauth, setrefresh }) {

    const videouploadref = useRef(null);

    return (
        <div className="sticky top-0 z-30">
            <nav className="flex py-2 md:py-4 items-center shadow-2xl font-semibold bg-gray-100">
                <Link href='/'>
                    <a className="ml-4 sm:ml-6 md:ml-8 mr-auto">
                        {/* Logo */}
                        <svg width="80" height="22" viewBox="0 0 80 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.3671 21.6149H0V1.14746H4.3671V10.2683H4.62912L12.348 1.14746H17.2137L9.59488 10.1257L17.7486 21.6149H12.5063L6.43965 13.0484L4.3671 15.4453V21.6149Z" fill="#1B1B1B" />
                            <path d="M20.7627 21.6152V0H24.977V21.6152H20.7627Z" fill="#1B1B1B" />
                            <path d="M39.6734 17.1615H43.5983C43.4549 17.8758 43.1663 18.5546 42.7496 19.1574C42.3329 19.7602 41.7967 20.2748 41.1728 20.6705C39.876 21.5271 38.2517 21.9554 36.2998 21.9554C33.8664 21.9554 31.9691 21.2426 30.608 19.8169C29.2469 18.3912 28.5664 16.4077 28.5664 13.8664C28.5664 11.324 29.2518 9.31494 30.6226 7.83935C31.9934 6.36377 33.8664 5.62598 36.2416 5.62598C38.5986 5.62598 40.4358 6.321 41.7532 7.71104C43.0706 9.10108 43.73 11.0406 43.7312 13.5296V14.7931H32.7661V15.0052C32.7952 16.1695 33.1355 17.0891 33.7869 17.7639C34.4383 18.4387 35.3148 18.7767 36.4163 18.7779C37.1354 18.8013 37.8499 18.6578 38.5016 18.3591C39.0287 18.1139 39.4456 17.6878 39.6734 17.1615ZM36.2561 8.78565C35.8115 8.7714 35.3686 8.84571 34.9541 9.00408C34.5397 9.16246 34.1624 9.40159 33.8451 9.707C33.2131 10.3224 32.8583 11.1357 32.7807 12.1467H39.5879C39.5381 11.1071 39.2173 10.2874 38.6253 9.6874C38.0333 9.08742 37.2436 8.78921 36.2561 8.79277V8.78565Z" fill="#1B1B1B" />
                            <path d="M61.1799 5.9707L55.6628 21.6158H50.9117L45.3691 5.9707H49.9018L53.1935 17.6292H53.4537L56.7291 5.9707H61.1799Z" fill="#1B1B1B" />
                            <path d="M64.0332 21.617V5.97194H68.1146V8.46688H68.3766C68.5995 7.65765 69.1173 6.95643 69.8323 6.49588C70.6099 5.96985 71.5369 5.69734 72.4817 5.7171C73.0393 5.69466 73.5969 5.76209 74.1321 5.91669V9.67515C73.6881 9.50407 73.0209 9.41853 72.1305 9.41853C70.9623 9.41853 70.0234 9.73515 69.3138 10.3684C68.6041 11.0016 68.2493 11.8624 68.2493 12.9507V21.617H64.0332Z" fill="#1B1B1B" />
                            <path d="M79.3031 21.309C78.7886 21.7544 78.1256 22.0002 77.4389 22.0002C76.7522 22.0002 76.0892 21.7544 75.5747 21.309C75.1227 20.8246 74.8721 20.1921 74.8721 19.5358C74.8721 18.8796 75.1227 18.2471 75.5747 17.7627C76.0898 17.3214 76.7509 17.0781 77.4353 17.0781C78.1196 17.0781 78.7808 17.3214 79.2958 17.7627C79.5311 17.9951 79.7148 18.2725 79.8357 18.5776C79.9565 18.8827 80.0119 19.2089 79.9982 19.5358C80.0112 19.8621 79.9563 20.1876 79.8368 20.4924C79.7173 20.7972 79.5357 21.0751 79.3031 21.309Z" fill="#1B1B1B" />
                        </svg>
                    </a>
                </Link>
                {!auth && //for unauthorized user's
                    <>
                        <div onClick={()=>{setauthprompt(true);setauthpage("signin")}} className="cursor-pointer mr-4 sm:mr-6 md:mr-8 border border-gray-800 p-1 px-4 rounded">
                            <p className="text-xs md:text-sm">Login</p>
                        </div>
                        <div onClick={()=>{setauthprompt(true);setauthpage("signup")}} className="cursor-pointer mr-4 sm:mr-6 md:mr-8 bg-red-700 p-1 px-2 rounded">
                            <div className="flex justify-between items-center text-white">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.24729 0.970703C3.56729 0.970703 0.580627 3.95737 0.580627 7.63737C0.580627 11.3174 3.56729 14.304 7.24729 14.304C10.9273 14.304 13.914 11.3174 13.914 7.63737C13.914 3.95737 10.9273 0.970703 7.24729 0.970703ZM10.074 4.8107C9.29404 4.0307 8.27404 3.63737 7.24737 3.63737V7.63737L4.42071 10.464C5.98071 12.024 8.51404 12.024 10.0807 10.464C11.6407 8.90404 11.6407 6.3707 10.074 4.8107ZM1.91396 7.63737C1.91396 10.584 4.30063 12.9707 7.24729 12.9707C10.194 12.9707 12.5806 10.584 12.5806 7.63737C12.5806 4.6907 10.194 2.30404 7.24729 2.30404C4.30063 2.30404 1.91396 4.6907 1.91396 7.63737Z" fill="white" /></svg>
                                <p className="ml-1 sm:ml-2 text-xs md:text-sm">Sign Up</p>
                            </div>
                        </div>
                    </>
                }
                {auth && // only for logged in users
                <>
                    <div onClick={() => videouploadref.current.click()} className="cursor-pointer mr-4 sm:mr-6 md:mr-8 border border-blue-600 p-1 px-2 rounded">
                        <div className="flex justify-between items-center">
                            <p className="mr-1 sm:mr-2 text-xs md:text-sm">Upload Video</p>
                            <RiUploadCloudFill className="text-blue-600" />
                        </div>
                    </div>
                    <UploadVideo setrefresh={setrefresh} videouploadref={videouploadref}/> 
                    <div onClick={()=>{Auth.signOut(); setauth(false);}} className="cursor-pointer mr-4 sm:mr-6 md:mr-8 bg-red-700 p-1 px-2 rounded">
                            <div className="flex justify-between items-center text-white">
                                <p className="mr-1 sm:mr-2  text-xs md:text-sm">Sign Out</p>
                                <RiLogoutCircleRLine/>
                            </div>
                        </div>
                </>
                }
            </nav>
        </div>
    )
}
