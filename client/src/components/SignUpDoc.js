import axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function SignUpDoc (){
    const[userName,setUserName]=useState("");
    const[doctorName,setdoctorName]=useState("");
    const[specialist,setSpecialist]=useState("");
    const[password,setPassword]=useState("");
    const[phNo,setPhNo]=useState();
    const[post,setPost]=useState();
    async function validateUser(e){
        e.preventDefault();
       await axios.post("http://localhost:8080/doctor",{
          userName:userName,
          doctorName:doctorName,
          specialist:specialist,
          password:password,
          phNo:phNo
        }
        )
        alert("success");
        setUserName();
        setPassword();
        setSpecialist()
        setUserName();
        setPhNo();
        // .then(response=>{
        //     console.log(response.data);
        // })
    }
    return (
      <form>
        <h3>Docter Sign Up</h3>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={doctorName}
            onChange={(e)=>setdoctorName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>User Name</label>
          <input type="text" className="form-control" placeholder="User name" 
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}

          />
        </div>

        <div className="mb-3">
          <label>Specialist</label>
          <input
            type="text"
            className="form-control"
            placeholder="Specialist"
            value={specialist}
            onChange={(e)=>setSpecialist(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Phone No</label>
          <input
            type="number"
            className="form-control"
            placeholder="Phone Number"
            value={phNo}
            onChange={(e)=>setPhNo(e.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={validateUser}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
