package com.myapp.spring.service;

import org.springframework.stereotype.Service;

import com.myapp.spring.dao.CurrentUserRepo;
import com.myapp.spring.model.current_user;

@Service
public class CurrentUserImpl implements CurrentUser {

	private CurrentUserRepo dao;


	
	public CurrentUserImpl( CurrentUserRepo dao) {
		this.dao = dao;
		
		
	}
	@Override
	public current_user findUser() {
		// TODO Auto-generated method stub
		return dao.findAll().get(0);
	}

}
