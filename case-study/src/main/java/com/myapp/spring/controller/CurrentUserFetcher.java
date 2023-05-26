package com.myapp.spring.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myapp.spring.model.current_user;
import com.myapp.spring.service.CurrentUser;

@RestController
@RequestMapping("/api/current")
public class CurrentUserFetcher {
		private CurrentUser service;
		public CurrentUserFetcher(CurrentUser service) {
			this.service = service;

		}
		
		@GetMapping
		public ResponseEntity<current_user> findAll(){
			return new  ResponseEntity<>(service.findUser(),HttpStatus.OK);
		}
		
		
		
		
		


}
