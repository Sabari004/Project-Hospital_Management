package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Doctor;

public interface DoctorRepo extends JpaRepository<Doctor,Integer>{

	Optional<Doctor> findByUserName(String id);

}
