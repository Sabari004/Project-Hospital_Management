import React, { useState, useEffect } from 'react';
import { Link, useLocation ,useNavigate} from 'react-router-dom';
import Style from '../style/docHome.module.css'
import axios from 'axios';

function DocHome() {
    const location = useLocation();
    const navigate=useNavigate(); 
    const [user, setUser] = useState();
    const [patient, setPatient] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/doctor").then((response)=>{
            
            const listOfUsers = response.data;
            console.log(listOfUsers)
            let j=0;
        if(listOfUsers.length !== 0 ) {
            for(let i = 0; i < listOfUsers.length; i++) {
                if(listOfUsers[i].userName===location.state.name) {
                    j=i;
                    console.log(j);
                    setUser(listOfUsers[j]);
                    break;
                }
            }
        }
        })
        axios.get("http://localhost:8080/patient").then((response)=>{
            setPatient(response.data);
            console.log(response.data)
        })
        
},[])
const deleteUser=()=>{

}

    return ( 
        <>
      {user&&
        <>
        <h1>Welcome, {user.doctorName}</h1>
            
        </>}
        <table>
            <tr>
                <th>Patient Name</th>
                <th>Sex</th>
                <th>Patient Age</th>
                <th>VIEW</th>
                <th>DELETE</th>
                <th>EDIT</th>
            </tr>
            {patient.map((s)=>
            <tr>
                <td>{s.patientName}</td>
                <td>{s.sex}</td>
                <td>{s.patientage}</td>
                <td><button className='btn btn-primary' 
                onClick={()=>navigate('/viewuser',{state:{name:s.userName}})}
                >VIEW</button></td>
                <td><button className='btn btn-success'
                onClick={()=>navigate('/edituser',{state:{name:s.userName}})}>EDIT</button></td>
                <td><button className='btn btn-danger' onClick={
                    ()=>{
                        axios.delete(`http://localhost:8080/patient/${s.userName}`)
                        .then(resp=>{
                            alert(resp.data)
                            const t = patient;
                            t.filter(i => i.userName !== s.userName)
                            setPatient(t);
                        })
                    }
                }>DELETE</button></td>
                    
                    
            </tr>)}
        </table>
        </>
     );
}

export default DocHome;