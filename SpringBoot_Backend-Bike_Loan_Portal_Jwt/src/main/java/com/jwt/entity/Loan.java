package com.jwt.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Loan")
public class Loan {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int loanId=4;
	@Column
	private String loantype="Pending";
	private int userid;
	@Column(nullable=false)
	private String applicantName;
	@Column(nullable=false)
	private String applicantAddress;
	@Column(nullable=false)
	private String applicantMobile;
	@Column(nullable=false)
	private String applicantEmail;
	@Column(nullable=false)
	private String applicantAadhar;
	@Column(nullable=false)
	private String applicantPan;
	@Column(nullable=false)
	private String applicantSalary;
	@Column(nullable=false)
	private String loanAmountRequires;
	@Column(nullable=false)
	private String loanRepaymentsMonths;
	public int getLoanId() {
		return loanId;
	}
	public void setLoanId(int loanId) {
		this.loanId = loanId;
	}
	public String getLoantype() {
		return loantype;
	}
	public void setLoantype(String loantype) {
		this.loantype = loantype;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getApplicantName() {
		return applicantName;
	}
	public void setApplicantName(String applicantName) {
		this.applicantName = applicantName;
	}
	public String getApplicantAddress() {
		return applicantAddress;
	}
	public void setApplicantAddress(String applicantAddress) {
		this.applicantAddress = applicantAddress;
	}
	public String getApplicantMobile() {
		return applicantMobile;
	}
	public void setApplicantMobile(String applicantMobile) {
		this.applicantMobile = applicantMobile;
	}
	public String getApplicantEmail() {
		return applicantEmail;
	}
	public void setApplicantEmail(String applicantEmail) {
		this.applicantEmail = applicantEmail;
	}
	public String getApplicantAadhar() {
		return applicantAadhar;
	}
	public void setApplicantAadhar(String applicantAadhar) {
		this.applicantAadhar = applicantAadhar;
	}
	public String getApplicantPan() {
		return applicantPan;
	}
	public void setApplicantPan(String applicantPan) {
		this.applicantPan = applicantPan;
	}
	public String getApplicantSalary() {
		return applicantSalary;
	}
	public void setApplicantSalary(String applicantSalary) {
		this.applicantSalary = applicantSalary;
	}
	public String getLoanAmountRequires() {
		return loanAmountRequires;
	}
	public void setLoanAmountRequires(String loanAmountRequires) {
		this.loanAmountRequires = loanAmountRequires;
	}
	public String getLoanRepaymentsMonths() {
		return loanRepaymentsMonths;
	}
	public void setLoanRepaymentsMonths(String loanRepaymentsMonths) {
		this.loanRepaymentsMonths = loanRepaymentsMonths;
	}
	public Loan(int loanId, String loantype, String applicantName, String applicantAddress, String applicantMobile,
			String applicantEmail, String applicantAadhar, String applicantPan, String applicantSalary,
			String loanAmountRequires, String loanRepaymentsMonths) {
		super();
		this.loanId = loanId;
		this.loantype = loantype;
		this.applicantName = applicantName;
		this.applicantAddress = applicantAddress;
		this.applicantMobile = applicantMobile;
		this.applicantEmail = applicantEmail;
		this.applicantAadhar = applicantAadhar;
		this.applicantPan = applicantPan;
		this.applicantSalary = applicantSalary;
		this.loanAmountRequires = loanAmountRequires;
		this.loanRepaymentsMonths = loanRepaymentsMonths;
	}
	public Loan() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
