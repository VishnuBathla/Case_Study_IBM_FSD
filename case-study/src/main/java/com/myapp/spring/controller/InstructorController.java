package com.myapp.spring.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myapp.spring.model.Instructor;
import com.myapp.spring.service.InstructorService;

// http://localhost:8888/products

@RestController
@RequestMapping("/api/instructors")
public class InstructorController {
	
	
	private InstructorService instructorService;
	

	

	public InstructorController(InstructorService instructorService) {
		this.instructorService = instructorService;

	}
	
	@GetMapping
	public ResponseEntity<List<Instructor>> findAll(){
		return new  ResponseEntity<>(instructorService.loadAll(),HttpStatus.OK);
	}
	@PostMapping
	public ResponseEntity<Instructor> findbyId(@RequestBody String id){
//		return new ResponseEntity<String>(id,HttpStatus.OK);
		return new ResponseEntity<Instructor>(instructorService.findbyLogin_Id(id),HttpStatus.OK);
	}
	
	

}
