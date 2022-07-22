import { useState } from "react";
import { useEffect } from "react";
import { authFetch } from "../../fetch/auth";
import "./userList.css";

export default function UserList() {
    const [token, setToken] = useState();
    const [response, setResponse] = useState();
    const credentials = {
        username: "iman244",
        password: "123456789",
    };

    let auth = new authFetch();
    let login = async () => {
        try {
            let user = await auth.login(credentials);
            console.dir(user);
        } catch (error) {
            console.dir(error);
        }
    };
    useEffect(() => {
        login();
    }, []);

    return (
        <div className="userList">
            {response ? <span>{token}</span> : <span>no response yet</span>}
        </div>
    );
}
