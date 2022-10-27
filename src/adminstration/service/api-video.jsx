import axios from 'axios';


const url = "http://localhost:3001/Video_iframe";

export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(url,user);
}

export const editUser = async (id, Video_iframe) => {
    return await axios.put(`${url}/${id}`,Video_iframe);
}


export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}