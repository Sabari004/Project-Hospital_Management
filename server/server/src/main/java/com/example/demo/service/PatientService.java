package com.example.demo.service;


import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Patient;
import com.example.demo.repository.PatientRepo;

@Service
public class PatientService{
	@Autowired
	PatientRepo service;
	public List<Patient> getPatients(){
		return service.findAll();
	}
	public Optional<Patient> getPatientById(String id){
		return service.findByUserName(id);
	}
	public String addPatient(Patient p) {
		service.save(p);
		return "Patient is added";
	}
	public String deletePatient(String id) {
		List<Patient> patients=service.findAll();	
		Iterator<Patient> pat=patients.iterator();
		
		while(pat.hasNext())  
		{  
		Patient user=pat.next();  
		if((user.getUserName()).equals(id))  
		{  
			service.delete(user);
		}
		}
		return "Patient is deleted";
	}
}