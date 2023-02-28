package com.jwt.dao;






import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jwt.entity.Role;
import com.jwt.entity.User;

@Repository
public interface UserDao extends CrudRepository<User, Integer> {

	void save(Role userRole);
	 public User findByUserName(String userName); 

	

	
}