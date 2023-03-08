import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function SignUp()  {
  const[userName,setUserName]=useState("");
  const[PatientName,setPatientName]=useState("");
  const[password,setPassword]=useState("");
  const[PatientAge,setPatientAge]=useState(0);
  const[sex,setSex]=useState("");
  const[PatientAddress,setPatientAddress]=useState("");
  const[post,setPost]=useState();
  
  async function validateUser(e){
    e.preventDefault();
   await axios.post("http://localhost:8080/patient",{
    userName:userName,
    patientName:PatientName,
    password:password,
    patientage:PatientAge,
    sex:sex,
    patientAddress:PatientAddress,
    }
    )
    alert("success");
    setUserName();
setPatientName();
setPassword();
setPatientAge();
setSex();
setPatientAddress();

}
    return (
      <form>
        <h3>Patient Sign Up</h3>

        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="User name"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Name" 
          value={PatientName}
            onChange={(e)=>setPatientName(e.target.value)}

          />
        </div>
        <div className="mb-3">
          <label>Patient Age</label>
          <input type="number" className="form-control" placeholder="Patient Age"
           value={PatientAge}
            onChange={(e)=>setPatientAge(e.target.value)}
           />
        </div>
        <div className="mb-3">
          <label>Sex</label>
          <input type="text" className="form-control" placeholder="Sex" 
           value={sex}
            onChange={(e)=>setSex(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Patient Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Patient Address"
            value={PatientAddress}
            onChange={(e)=>setPatientAddress(e.target.value)}
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
