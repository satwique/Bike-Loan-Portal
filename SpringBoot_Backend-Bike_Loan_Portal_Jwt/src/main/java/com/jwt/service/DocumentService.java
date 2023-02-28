package com.jwt.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jwt.Exception.ResourceNotFoundException;
import com.jwt.dao.DocumentDao;
import com.jwt.entity.Document;
import com.jwt.entity.Loan;



@Service
public class DocumentService {
	@Autowired
	private DocumentDao documentDao;
	
	

	public Document saveDocument(Document  document ) {
		
		return documentDao.save(document );
	}
	public Document getDocumentById(int id) {
		Optional<Document> document=documentDao.findById(id);
		if(document.isPresent()) {
			return document.get();
		}
		else {
			throw new ResourceNotFoundException("document Id Doesnot Exit");
		}
	}
	

}
