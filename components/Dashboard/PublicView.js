import VideoCard from "./VideoCard";
import { useState, useEffect } from "react";
import { API } from 'aws-amplify';
import { listBlogs } from '../../graphql/queries';

export default function PublicView({refresh}) {

    const [posts, setposts] = useState([]);

    useEffect(() => { //fetches everytime refresh is changed
       fetchPosts();
    }, [refresh]);

    const fetchPosts = async () => { // fetch all posted videos
        const data = await API.graphql({query:listBlogs});
        setposts(data.data.listBlogs.items);
    }

    return (
        <div>
            <h1 className="mt-4 text-center text-lg sm:text-xl md:text-2xl font-bold">{posts.length <=0?"No Video's Posted Yet!":"Videos Uploaded by other users"}</h1>
            <div className="my-8 w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
                {
                    posts.map((val,idx)=>{ // looping through all the posted videos
                        return <VideoCard val={val} key={idx} />
                    })
                }
            </div>
        </div>
    )
}
