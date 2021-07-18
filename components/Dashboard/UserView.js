import VideoCard from "./VideoCard";
import { useState, useEffect } from "react";
import { Auth, API } from 'aws-amplify';
import { postsByUser } from '../../graphql/queries';

export default function UserView({refresh}) {

    const [posts, setposts] = useState([]);

    useEffect(() => {
       fetchPosts();
    }, [refresh]);

    const fetchPosts = async () => { //fetch all the videos posted by signed in user
        let id = await Auth.currentAuthenticatedUser();
        let user = id.username;
        if(id) {
            const data = await API.graphql({
                query:postsByUser,
                variables:{ user }
            });
            setposts(data.data.postsByUser.items);
        }
    }

    return (
        <div>
            <h1 className="text-center mt-4 text-lg sm:text-xl md:text-2xl font-bold">{posts.length <=0?"No Video's Posted by you!":"Videos Uploaded by me"}</h1>
            <div className="my-8 w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
                {
                    posts.map((val,idx)=>{ //looping through all the posted videos
                        return <VideoCard val={val} key={idx}/>
                    })
                }
            </div>
        </div>
    )
}
