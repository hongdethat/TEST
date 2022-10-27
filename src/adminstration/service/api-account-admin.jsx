import axios from 'axios';


const url = "http://localhost:3001/Dashboards";

export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

// export const addUser = async (user) => {
//     return await axios.post(url,user);
// }

export const editUser = async (id, Dashboards) => {
    return await axios.put(`${url}/${id}`,Dashboards);
}


export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}