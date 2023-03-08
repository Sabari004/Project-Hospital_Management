package com.example.demo.service;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Doctor;
import com.example.demo.repository.DoctorRepo;

@Service
public class DoctorService{
	@Autowired
	DoctorRepo service;
	public List<Doctor> getDoctors(){
		return service.findAll();
	}
	public Optional<Doctor> getDoctorById(String id){
		return service.findByUserName(id);
	}
	public String addDoctor(Doctor d) {
		service.save(d);
		return "Doctor is added";
	}
	public String deleteDoctor(String id) {
		List<Doctor> doctors=service.findAll();	
		Iterator<Doctor> doc=doctors.iterator();
		
		while(doc.hasNext())  
		{  
		Doctor user=doc.next();  
		if((user.getUserName()).equals(id))  
		{  
			service.delete(user);
		}
		}
		return "Doctor is Deleted";
	}
}
