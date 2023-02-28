package com.jwt.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jwt.entity.Loan;
import com.jwt.service.LoanService;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/loan/")



public class LoanController {
	
	
		private LoanService loanService;

		public LoanController (LoanService loanService) {
			super();
			this.loanService = loanService;
		}
		@PostMapping("/addLoan")
		@PreAuthorize("hasRole('User')")
		public ResponseEntity<Loan> saveLoan(@RequestBody Loan loan){
			return new ResponseEntity<Loan>(loanService.saveLoan(loan),HttpStatus.CREATED);
			
		}
		@GetMapping("/getLoanList")
		
		public List<Loan> getAllLoan(){
			return loanService.getAllLoan();
		}
		@GetMapping("/getLoan/{id}")
		@PreAuthorize("hasRole('User') or hasRole('Admin')")
		public ResponseEntity<Loan> getLoanyId(@PathVariable("id") int loanId){
			return new  ResponseEntity<Loan> (loanService.getLoanById(loanId),HttpStatus.OK);
		}
		
		
		@PutMapping("/editLoan/{id}")
		@PreAuthorize("hasRole('User') or hasRole('Admin')")
		
		public ResponseEntity<Loan>updateLoan(@PathVariable("id") int id, @RequestBody Loan loan){
			return new ResponseEntity<Loan>(loanService.updateLoan(loan, id),HttpStatus.OK);
			
			
		}
		@DeleteMapping("/deleteLoan/{id}")
		public ResponseEntity<String> deleteLoan(@PathVariable("id")int Id){
			loanService.deleteLoan(Id);
			return new ResponseEntity<String> ("Loan deleted successfully",HttpStatus.OK);
			
		}
		

}
