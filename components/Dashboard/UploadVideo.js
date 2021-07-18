import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { API, Storage, Auth } from 'aws-amplify';
import { createPost } from '../../graphql/mutations';

export default function UploadVideo({ videouploadref, setrefresh }) {
    const [video, setvideo] = useState(null);
    const [post] = useState({
        name: "",
        email:"",
        video_url: ""
    });

    useEffect(() => {
        const CreatePost = async () => { //create a new entry in DynamoDb for a video
            if (video) {
                const filename = `${video.name}_${uuid()}`;
                let data = await Auth.currentAuthenticatedUser();
                let email = data.attributes.email;
                let name = data.attributes.name;
                post.name = name?name:email.substring(0, email.lastIndexOf("@"));
                post.email = email;
                post.video_url = filename;
                await Storage.put(filename, video);
                await API.graphql({
                    query: createPost,
                    variables: { input: post },
                    authMode: "AMAZON_COGNITO_USER_POOLS"
                })
                setrefresh(prev=>!prev);
            }
        }
        CreatePost();
    },[video,post,setrefresh]);
    
    return ( //hidden video input field
        <div>
            <input onChange={(e) => { setvideo(e.target.files[0]); }} className="hidden" ref={videouploadref} type="file" name="upload-video" accept="video/mp4,video/x-m4v,video/*" />
        </div>
    )
}
