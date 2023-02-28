package com.jwt.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jwt.entity.Loan;



public interface LoanDao extends JpaRepository<Loan,Integer>{

}
