import React, { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../../lib/FirebaseConfig';
import firebase from 'firebase';
import '../users/adduser.css';
import { useParams } from 'react-router-dom';

function EditUserFirestore({ users }) {
    const [userInfo, setUserInfo] = useState([]);
    const { id } = useParams();
    const [userName, setUserName] = useState([]);
    const [name, setName] = useState([]);
    const [mail, setMail] = useState([]);
    const [address, setAddress] = useState([]);

    const handleEdit = (event) => {
        db.collection("users")
            .onSnapshot((snapshot) => setUserInfo(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))));
    };
    const isInvalid = userName === '' || name === '';

    useEffect(() => {
        db.collection('users').doc(users).update({
            username: userName,
            name: name,
            email: mail,
            address: address,
        })

    }, []);
    const result = () => {
        db.collection("users").doc(users).get();
    }

    console.log(result);
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
                    type="mail"
                    placeholder="Enter your email"
                    className=""
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter your address"
                    className=""
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <button disabled={isInvalid} type="submit" className="btn btn-primary" onClick={handleEdit}>Edit User</button>
            </form>
        </div>
    )
}

export default EditUserFirestore
