import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
function EditUser() {
    const navigate =useNavigate();

    const[PatientName,setPatientName]=useState("");
    const[password,setPassword]=useState("");
    const[PatientAge,setPatientAge]=useState(0);
    const[sex,setSex]=useState("");
    const[PatientAddress,setPatientAddress]=useState("");
    const[userName,setUserName]=useState("");
    const [user,setUser]=useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/patient/${location.state.name}`)
        .then((resp)=>{
            console.log(resp.data)
            setUser(resp.data)
            setUserName(resp.data.userName)
            setPatientName(resp.data.patientName);
            setPassword(resp.data.password);
            setPatientAge(resp.data.patientage);
            setSex(resp.data.sex);
            setPatientAddress(resp.data.patientAddress);

        })
    }, []);
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
    navigate("/doctor/home")
    
    }
    const location=useLocation();
    return ( 
        <>
            {user&&
                <>
                <form>
        <h3>Edit {userName}</h3>

    

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
            Change
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
                </>
            }
        </>
     );
}

export default EditUser;