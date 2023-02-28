package com.jwt.service;


import java.util.HashSet;

import java.util.List;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.jwt.dao.RoleDao;

import com.jwt.dao.UserDao;
import com.jwt.entity.Role;
import com.jwt.entity.User;



@Service
public class UserService {
	int s=7;

    @Autowired
    private UserDao userDao;
    @Autowired
    private RoleDao roleDao;
    
   
   
    @Autowired
    private PasswordEncoder passwordEncoder;

   

    public User registerNewUser(User user) {
        Role role = roleDao.findById("User").get();
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setRole(userRoles);
        
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));

        return userDao.save(user);
    }
    
    public void initRolesAndUser() {
    	 Role adminRole = new Role();
         adminRole.setRoleName("Admin");
         adminRole.setRoleDescription("Admin role");
         roleDao.save(adminRole);

         Role userRole = new Role();
         userRole.setRoleName("User");
         userRole.setRoleDescription("Default role for newly created record");
         roleDao.save(userRole);

         User adminUser = new User();
         adminUser.setuId(1);
         adminUser.setUserEmail("admin@123");
         adminUser.setUserMobile("9937403388");
         adminUser.setUserName("admin123");
         adminUser.setUserPassword(getEncodedPassword("admin@pass"));
        
         Set<Role> adminRoles = new HashSet<>();
         adminRoles.add(adminRole);
         adminUser.setRole(adminRoles);
         userDao.save(adminUser);
        
        /* User user = new User();
         user.setUserName("sat123");
         user.setUserPassword(getEncodedPassword("sat@pass"));
         user.setUserFirstName("sat");
         user.setUserLastName("mis");
         Set<Role> userRoles = new HashSet<>();
         userRoles.add(userRole);
         user.setRole(userRoles);
         userDao.save(user);*/
    }
    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }
    public List<User> getAllUser() {
		return (List<User>) userDao.findAll();
	}
   /*public User getUserById(int uId) {
		Optional<User> user=userDao.findByName("");
		if(user.isPresent()) {
			return user.get();
		}
		else {
			throw new ResourceNotFoundException("User Id Doesnot Exit");
		}
	}*/

	
	/*public User UserupdateUser(User user, int uId) {
		User user1=userDao.findById(uId).orElseThrow(()-> new ResourceNotFoundException("User Id Doesnot Exit"));
		user1.setUserName(user.getUserName());
		user1.setUserEmail(user.getUserEmail());
		user1.setUserFirstName(user.getUserFirstName());
		user1.setUserLastName(user.getUserLastName());
		user1.setUserMobile(user.getUserMobile());
		
		user1.setRole(user.getRole());;
		userDao.save(user1);
		return user1;
	}

	
	public void deleteUser(int uId) {
		userDao.findById(uId).orElseThrow(()-> new ResourceNotFoundException("User Id Doesnot Exit"));
		userDao.deleteById(uId);
		
	}*/


}