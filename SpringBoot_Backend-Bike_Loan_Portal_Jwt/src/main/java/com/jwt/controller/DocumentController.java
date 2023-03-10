package com.jwt.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jwt.entity.Document;
import com.jwt.entity.Loan;
import com.jwt.service.DocumentService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/document/")

public class DocumentController {
	
	private DocumentService documentService;
	
	@PostMapping("/addDocument")
	public ResponseEntity<Document> saveDocument(@RequestBody Document document){
		return new ResponseEntity<Document>(documentService.saveDocument(document),HttpStatus.CREATED);
		
	}
	
	@GetMapping("/getDocument/{id}")
	public ResponseEntity<Document> getDocumentById(@PathVariable("id") int documentId){
		return new  ResponseEntity<Document> (documentService.getDocumentById(documentId),HttpStatus.OK);
	}
	

}
