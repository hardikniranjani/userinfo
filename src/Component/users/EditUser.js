import React, { useEffect, useState} from 'react';
import firebase from '../../lib/FirebaseConfig';
import {useParams} from "react-router-dom";
import '../users/adduser.css';

function EditUser() {

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const {id} = useParams();
    alert(id);

    return (
        <div className="form_user_main">
            <form className="form_user" >
                <input
                    type="text"
                    placeholder="Enter your username"
                    className=""
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter your name "
                    className=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter your email"
                    className=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter your address"
                    className=""
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#38B1EA', border: 'none' }} >Update User</button>
            </form>
        </div>
    )
}

export default EditUser