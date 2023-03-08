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

import com.example.demo.model.Patient;
import com.example.demo.service.PatientService;

@RestController
public class PatientController{
	@Autowired
	PatientService repos;
	@CrossOrigin
	@GetMapping("/patient")
	public List<Patient> getPat(){
		return repos.getPatients();
	}
	@CrossOrigin
	@GetMapping("/patient/{id}")
	public Optional<Patient> getPatById(@PathVariable String id){
		return repos.getPatientById(id);
	}
	@CrossOrigin
	@PostMapping("/patient")
	public String postPat(@RequestBody Patient p) {
		return repos.addPatient(p);
	}
	@CrossOrigin
	@PutMapping("/patient")
	public String putPat(@RequestBody Patient p) {
		return repos.addPatient(p);
	}
	@CrossOrigin
	@DeleteMapping("/patient/{id}")
	public String delPat(@PathVariable String  id) {
		return repos.deletePatient(id);
	}
	
	
}