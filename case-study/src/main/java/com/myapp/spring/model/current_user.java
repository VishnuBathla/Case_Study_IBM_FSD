package com.myapp.spring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "current_user")
public record current_user(
		 @Id String id,
		 String user_id,
		 String type
)  {
	
}
