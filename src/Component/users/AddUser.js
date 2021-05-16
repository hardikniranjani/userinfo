import React, { useEffect, useState } from 'react'
import firebase from '../../lib/FirebaseConfig';
import '../users/adduser.css';

function AddUser() {

    const [user, setUser] = useState([]);
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');


    // useEffect(() => {
    //     const firestore = firebase.database().ref("/userInfo");
    //     firestore.on("value", (response) => {
    //         const data = response.val();
    //         let userInfo = [];
    //         for(let id in data) {
    //             userInfo({
    //                 id:id,
    //                 name: data[id].name,
    //                 username: data[id].userName,
    //                 email: data[id].email,
    //                 address: data[id].address,
    //             });
    //         }
    //         setUser(userInfo);
    //     });
    // }, []);

    

    const handleAddUser = () => {
        const firestore = firebase.database().ref("/usersInfo");
        let data = {
            name: name,
            username: userName,
            email: email,
            address: address,
        };
        firestore.push(data);
        setUserName("");
        setName("");
        setEmail("");
        setAddress("");
}
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

                <button disabled={isInvalid} type="submit" className="btn btn-primary" onClick={handleAddUser}>Add User</button>
            </form>
        </div>
    )
}

export default AddUser
