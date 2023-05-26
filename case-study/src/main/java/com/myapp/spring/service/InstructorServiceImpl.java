package com.myapp.spring.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.myapp.spring.dao.InstructorRepository;
import com.myapp.spring.model.Instructor;

@Service
public class InstructorServiceImpl implements InstructorService {
	
	
	private InstructorRepository dao1;


	
	public InstructorServiceImpl( InstructorRepository dao1) {
		this.dao1 = dao1;
		
		
	}



	@Override
	public List<Instructor> loadAll() {
		// TODO Auto-generated method stub
		return dao1.findAll();
	}



	@Override
	public Instructor findbyLogin_Id(String id) {
		// TODO Auto-generated method stub
		return dao1.findFirstByLoginId(id);
	}


	
	

}
