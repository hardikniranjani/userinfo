import React from 'react';
import { useState } from 'react';
import { db, storage } from '../../lib/FirebaseConfig';
import firebase from 'firebase';
import '../users/adduser.css';
import { useParams } from 'react-router-dom';

function AddUserFirestore() {
    const [user, setUser] = useState([]);
    const {id} = useParams();
    const [userName, setUserName] = useState([]);
    const [name, setName] = useState([]);
    const [mail, setMail] = useState([]);
    const [address, setAddress] = useState([]);

    const handleUpload = (event) => {
        event.preventDefault();
                        db.collection("users").add({
                            username: userName,
                            name: name,
                            email: mail,
                            address: address,
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            });
                    setUserName("");
                    setName("");
                    setMail("");
                    setAddress("");
    };
    const isInvalid = userName === '' || name === '' ;

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

                <button disabled={isInvalid}  type="submit" className="btn btn-primary" onClick={handleUpload}>Add User</button>
            </form>
        </div>
    )
}

export default AddUserFirestore;

