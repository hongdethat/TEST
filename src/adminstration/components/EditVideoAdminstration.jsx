import React, { useEffect, useState } from 'react';
import { editUser, getallUsers } from '../service/api-video';
import { useNavigate, useParams } from 'react-router-dom';

const initialValue = {
    title_video: "",
    image_video : "",
    Video_video: "",
}

const EditVideoAdminstration = () => {

    const [user, setUser] = useState(initialValue);
    const {title_video, image_video, Video_video} = user;

    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    },[]);

    const loadUserData = async () =>{
        const response = await getallUsers(id);
        setUser(response.data);
    }

    const history = useNavigate();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    const editUserDetails = async () =>{
       await editUser(id,user);
       history('/Administrator/Dashboard/News/Update-Video/');
    }

    return (
        <div maxWidth="sm">
            <div variant="h5" align="center">Update User Details</div>
            <form>
                <span>
                    <h1>Name</h1>
                    <input onChange={(e) => onValueChange(e)} name="title_video" value={title_video} />
                </span>
                <span>
                    <h1>User Name</h1>
                    <input onChange={(e) => onValueChange(e)} name="image_video" value={image_video} />
                </span>
                <span>
                    <h1>Email address</h1>
                    <input onChange={(e) => onValueChange(e)} name="Video_video" value={Video_video} />
                </span>
                    <a onClick={() => editUserDetails() } color="primary" align="center">Update User</a>
                    <a onClick={()=> history("/Administrator/Dashboard/News/Update-Video/")}>Cancel</a>
            </form>
        </div>
    )
}


export default EditVideoAdminstration;