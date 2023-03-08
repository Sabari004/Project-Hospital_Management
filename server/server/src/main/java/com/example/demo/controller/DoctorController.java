package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Doctor;
import com.example.demo.service.DoctorService;

@RestController
public class DoctorController{
	@Autowired
	DoctorService repos;
	@CrossOrigin
	@GetMapping("/doctor")
	public List<Doctor> getDoc(){
		return repos.getDoctors();
	}
	@CrossOrigin
	@GetMapping("/doctor/{id}")
	public Optional<Doctor> getDocById(@PathVariable String id){
		return repos.getDoctorById(id);
	}
	@CrossOrigin
	@PostMapping("/doctor")
	public String postDoc(@RequestBody Doctor d) {
		return repos.addDoctor(d);
	}
	@PutMapping("/doctor")
	public String putDoc(@RequestBody Doctor d) {
		return repos.addDoctor(d);
	}
	@DeleteMapping("/doctor/{id}")
	public String delPDoc(@PathVariable String  id) {
		return repos.deleteDoctor(id);
	}
	
	
}