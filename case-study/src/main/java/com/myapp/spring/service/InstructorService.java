package com.myapp.spring.service;

import java.util.List;

import com.myapp.spring.model.Instructor;

public interface InstructorService {
	
	List<Instructor> loadAll();
	Instructor findbyLogin_Id(String id);

}
