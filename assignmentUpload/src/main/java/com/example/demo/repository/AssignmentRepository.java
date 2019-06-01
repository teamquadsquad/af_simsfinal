package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Assignment;


public interface AssignmentRepository extends MongoRepository<Assignment, String>{

}
