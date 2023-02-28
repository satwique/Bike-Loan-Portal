package com.jwt.entity;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Set;

@Entity
public class User implements Serializable {
	

	
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Id
	private int uId;
	
	
	 @Column(name = "userName")
    private String userName;
    
    private String userPassword;
    private String userEmail;
    private String userMobile;
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "USER_ROLE",
            joinColumns = {
                    @JoinColumn(name = "USER_ID",referencedColumnName="userName")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "ROLE_ID")
            }
    )
    private Set<Role> role;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

   

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public Set<Role> getRole() {
        return role;
    }

    public void setRole(Set<Role> role) {
        this.role = role;
    }

	

	
	public int getuId() {
		return uId;
	}

	public void setuId(int uId) {
		this.uId = uId;
		
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserMobile() {
		return userMobile;
	}

	public void setUserMobile(String userMobile) {
		this.userMobile = userMobile;
	}
	
    
}