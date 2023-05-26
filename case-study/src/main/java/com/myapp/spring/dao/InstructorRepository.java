package com.myapp.spring.dao;


import org.springframework.data.mongodb.repository.MongoRepository;


import com.myapp.spring.model.Instructor;


public interface InstructorRepository extends MongoRepository<Instructor, String> {
	
	Instructor findFirstByLoginId(String id);	

}
