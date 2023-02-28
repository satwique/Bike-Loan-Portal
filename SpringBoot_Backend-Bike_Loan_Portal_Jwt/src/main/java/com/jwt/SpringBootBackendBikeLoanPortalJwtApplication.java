package com.jwt;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.jwt.entity.Role;
import com.jwt.entity.User;

@SpringBootApplication
public class SpringBootBackendBikeLoanPortalJwtApplication {

	

	public static void main(String[] args) {
		SpringApplication.run(SpringBootBackendBikeLoanPortalJwtApplication.class, args);
		
		
	
	}

}
