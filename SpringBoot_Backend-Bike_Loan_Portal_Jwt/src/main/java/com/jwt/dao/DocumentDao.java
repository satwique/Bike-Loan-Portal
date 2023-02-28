package com.jwt.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jwt.entity.Document;

public interface DocumentDao extends JpaRepository<Document,Integer>{

}
