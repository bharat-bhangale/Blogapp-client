// import React, { useContext } from "react";
// import { useState } from "react";
// import { Navigate } from 'react-router-dom'
// import { UserContext } from "../componenets/Usercontext";

// const Loginpage = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [redirect, setRedirect] = useState(false);
//     const {setUserInfo} = useContext(UserContext)

//     const login = async (ev) => {
//         ev.preventDefault();
//         const response = await fetch('https://blogapp-server-bfj0.onrender.com/login', {
//             method: 'POST',
//             body: JSON.stringify({
//                 username,
//                 password
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             credentials: 'include',

//         })
//         if (response.ok) {
//             response.json().then(userInfo => {
//                 setUserInfo(userInfo);
//                 setRedirect(true);
//                 alert("Login Successful");
//             })
//             setRedirect(true);
//         }
//         else {
//             alert("Login Failed");
//         }

//     }

//     if (redirect) {
//         return <Navigate to={"/"} />
//     }

//     // const alertlogin = () => {
//     //     alert("Login Successful");
//     // };

//     return (
//         <form className="login" onSubmit={login}>
//             <h1>Login</h1>
//             <input
//                 type="text"
//                 placeholder="username"
//                 value={username}
//                 onChange={(ev) => setUsername(ev.target.value)}
//             />
//             <input
//                 type="password"
//                 placeholder="password"
//                 value={password}
//                 onChange={(ev) => setPassword(ev.target.value)}
//             />
//             <button>Login</button>
//         </form>
//     );
// };

// export default Loginpage;

import React, { useContext, useState } from "react";
import { Navigate } from 'react-router-dom';
import { UserContext } from "../components/UserContext"; // Ensure correct path

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);

    const login = async (ev) => {
        ev.preventDefault();
        const response = await fetch('https://blogapp-server-bfj0.onrender.com/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // Ensure server is configured to accept credentials
        });

        if (response.ok) {
            const userInfo = await response.json();
            setUserInfo(userInfo);
            setRedirect(true); // Move this inside the response.ok block to avoid premature redirection
        } else {
            alert("Login Failed");
        }
    };

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
            />
            <button type="submit">Login</button> {/* Explicitly specify button type */}
        </form>
    );
};

export default LoginPage;