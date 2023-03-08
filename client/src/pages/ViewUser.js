import axios from "axios";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function ViewUser() {
    const location = useLocation();
    const[user,setUser]=useState();
    useEffect(() => {
        axios.get(`http://localhost:8080/patient/${location.state.name}`)
        .then((resp)=>{
            console.log(resp.data)
            setUser(resp.data)
        })
    }, []);
    return ( 
        <>
        {user&&
        <>
        <h3>Patient Name:{user.patientName}</h3>
        <h3>UserName : {user.userName}</h3>
        <h3>Age : {user.patientage}</h3>
        <h3>Sex : {user.sex}</h3>
        <h3>Address : {user.patientAddress}</h3>
        <h3>Password : {user.password}</h3>
        </>}
        </>
     );
}

export default ViewUser;