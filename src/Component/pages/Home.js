import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import firebase from '../../lib/FirebaseConfig';


function Home() {

    const [userInfo, setUserInfo] = useState({
        id: "",
        name: "",
        username: "",
        email: "",
        address: "",
    });
    const [userData, setUserData] = useState([]);
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        const firestore = firebase.database().ref("/usersInfo");
        firestore.on("value", (response) => {
            const data = response.val();
            let usersInfo = [];
            for (let id in data) {
                usersInfo.push({
                    id: id,
                    name: data[id].name,
                    username: data[id].username,
                    email: data[id].email,
                    address: data[id].address,
                });
            }
            setUserData(usersInfo);
        });
    }, []);

const handleEditUser = (data) => {
    console.log(` clicked--${data.name}`)
    setUserInfo({
        id: data.id,
        name: data[id].name,
        username: data[id].username,
        email: data[id].email,
        address: data[id].address,
    })
}


    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table class="table shadow">
                    <thead className="thead-dark shadow">
                        <tr>
                            <th scope="col shadow">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col shadow">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((data, index) =>  (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data.name}</td>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                    <td>
                                        <Link className="btn btn-outline-primary mr-2" to={`/user/viewuser/${data.id}`} type="button" onClick={()=> handleEditUser(data)}><VisibilityIcon /></Link>
                                        <Link className="btn btn-outline-primary mr-2" to={`/user/edituser/${data.id }`}type="button" onClick={()=> handleEditUser(data)}><EditIcon /></Link>
                                        <button className="btn btn-outline-danger" ><DeleteIcon /></button>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
