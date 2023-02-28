package com.jwt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jwt.Exception.ResourceNotFoundException;
import com.jwt.dao.LoanDao;
import com.jwt.entity.Loan;


@Service
public class LoanService {
	private LoanDao loanDao;
	@Autowired
	public LoanService(LoanDao loanDao) {
		super();
		this.loanDao = loanDao;
	}
	
	public Loan getLoanById(int id) {
		Optional<Loan> loan=loanDao.findById(id);
		if(loan.isPresent()) {
			return loan.get();
		}
		else {
			throw new ResourceNotFoundException("Loan Id Doesnot Exit");
		}
	}

	
	public Loan saveLoan(Loan loan) {
		
		return loanDao.save(loan);
	}

	
	public List<Loan> getAllLoan() {
		
		return loanDao.findAll();
	}

	
	public Loan updateLoan(Loan loan, int id) {
		Loan loan1=loanDao.findById(id).orElseThrow(()-> new ResourceNotFoundException("loan Id Doesnot Exit"));
		
		loan1.setLoantype(loan.getLoantype());
		loan1.setApplicantName(loan.getApplicantName());
		loan1.setApplicantAddress(loan.getApplicantAddress());
		loan1.setApplicantEmail(loan.getApplicantEmail());
		loan1.setApplicantMobile(loan.getApplicantMobile());
		loan1.setApplicantAadhar(loan.getApplicantAadhar());
		loan1.setApplicantPan(loan.getApplicantPan());
		loan1.setLoanAmountRequires(loan.getLoanAmountRequires());
		loan1.setApplicantSalary(loan.getApplicantSalary());
		loan1.setLoanRepaymentsMonths(loan.getLoanRepaymentsMonths());
		loanDao.save(loan1);
		return loan1;
		
	}

	
	public void deleteLoan(int id) {
		loanDao.findById(id).orElseThrow(()-> new ResourceNotFoundException("loan Id Doesnot Exit"));
		loanDao.deleteById(id);
		
	}

	
	public List<Loan> approveLoan() {
		
		return loanDao.findAll();
	}

}
