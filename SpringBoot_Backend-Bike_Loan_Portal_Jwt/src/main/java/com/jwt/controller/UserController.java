package com.jwt.controller;


import java.util.List;

import javax.annotation.PostConstruct;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.jwt.entity.User;
import com.jwt.service.UserService;

@RestController
public class UserController {

    @Autowired
    private UserService userService;
    
    
    @PostConstruct
    public void initRoleAndUser() {
        userService.initRolesAndUser();
    }

   

    @PostMapping({"/registerNewUser"})
    public User registerNewUser(@RequestBody User user) {
        return userService.registerNewUser(user);
    }
    @GetMapping("/getUserList")
    
	public List<User> getAllUser(){
		return userService.getAllUser();
	}
    
    @GetMapping({"/forAdmin"})
    @PreAuthorize("hasRole('Admin')")
    public String forAdmin() {
		return "this url is for admin only";
    	
    }
    @GetMapping({"/forUser"})
    @PreAuthorize("hasRole('User')")
    public String forUser() {
		return "this url is for user only";
    	
    }
}