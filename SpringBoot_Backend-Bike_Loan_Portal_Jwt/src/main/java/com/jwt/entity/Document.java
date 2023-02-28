package com.jwt.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Document {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int documentId;
	private int lId;
	private String documentType;
	@Column(nullable=true)
	private byte[] documentUpload;
	public int getDocumentId() {
		return documentId;
	}
	public void setDocumentId(int documentId) {
		this.documentId = documentId;
	}
	public int getlId() {
		return lId;
	}
	public void setlId(int lId) {
		this.lId = lId;
	}
	public String getDocumentType() {
		return documentType;
	}
	public void setDocumentType(String documentType) {
		this.documentType = documentType;
	}
	public byte[] getDocumentUpload() {
		return documentUpload;
	}
	public void setDocumentUpload(byte[] documentUpload) {
		this.documentUpload = documentUpload;
	}
	public Document(int documentId, String documentType, byte[] documentUpload) {
		super();
		this.documentId = documentId;
		this.documentType = documentType;
		this.documentUpload = documentUpload;
	}
	public Document() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
