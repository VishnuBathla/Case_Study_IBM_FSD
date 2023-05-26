package com.myapp.spring.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.myapp.spring.model.current_user;

public interface CurrentUserRepo extends MongoRepository<current_user, String>  {


}
