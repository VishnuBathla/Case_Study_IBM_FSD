package com.myapp.spring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "instructors")
public record Instructor(
		 @Id String id,String name,
		
		String expertise,
		String email,
		
		String description,
		
		String imageUrl,
		
		String phone,
	
		String[] courses,
		@Field("login_id")
		String loginId
) {
	
	

	


	
	

}


// class Product{
//
//
//}