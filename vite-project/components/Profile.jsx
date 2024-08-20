import React, { useContext } from "react";
import UserContext from "../context/UserContext";
//retrival of data sent from Login page

function Profile()
{
    const {user} = useContext(UserContext)

    if (!user) <div> Please Login</div>

    return <div>Welcome user : {user.username}</div>
}

export default Profile 