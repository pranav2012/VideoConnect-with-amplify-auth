import { useState, useRef, useEffect } from "react";
import { API, Storage } from 'aws-amplify';
import { getPost } from '../../graphql/queries';

export default function VideoCard({val}) {

    const videoref = useRef(null);
    const [isvideoplaying, setisvideoplaying] = useState(false)
    const [post, setpost] = useState(null);
    const [url, seturl] = useState("");
    const [name, setname] = useState("");

    useEffect(() => {
        const fetchPosts = async () => { //fetch filename to search in S3Bucket
            if(val.id) {
                let id = val.id;
                const data = await API.graphql({
                    query:getPost,
                    variables:{ id }
                   });
                   setpost(data.data.getPost);
                   setname(val.name);
               }
           }
        fetchPosts();
     }, [val]);

         useEffect(() =>{
            const GetURL = async () =>{ //get s3 video url
                if(post){
                    const file = await Storage.get(post.video_url);
                    seturl(file);
                }
            }
           GetURL();
        },[post])

               
        const OnVideoClick = () =>{ //play pause the video
        if (isvideoplaying){
            videoref.current.pause();
            setisvideoplaying(false);
        }
        else{
            videoref.current.play();
            setisvideoplaying(true);
        }
    }

    return (
        <div style={{height:"70vh"}} className="shadow-2xl w-3/4 rounded-xl mx-auto bg-black relative overflow-hidden">
            <video
                ref={videoref}
                className="w-full h-full object-fill"
                src={url}
                alt="video"
                onClick={() => OnVideoClick()}
                loop
            />
            { !isvideoplaying && //play Button
                    <div onClick={() => OnVideoClick()} style={{left:"45%", top:"45%"}} className="absolute p-3 border-gray-200 border-8 border-opacity-30 bg-transparent rounded-full">
                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.811 7.04542C15.1444 7.81522 15.1444 9.73973 13.811 10.5095L3.26103 16.6006C1.9277 17.3704 0.261033 16.4081 0.261033 14.8685L0.261034 2.68643C0.261034 1.14683 1.9277 0.184577 3.26103 0.954377L13.811 7.04542Z" fill="white"/></svg>
                    </div>
            }
            <div className="absolute text-md font-semibold text-white bottom-2 left-4">{name}</div>
        </div>
    )
}
