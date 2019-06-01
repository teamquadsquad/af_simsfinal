package com.example.demo.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Assignment;
import com.example.demo.repository.AssignmentRepository;

@Service
public class StudentServiceImpl {
	
//	@Autowired
//	StudentRepository studentRepository;
//	
	@Autowired
	AssignmentRepository assignmentRepository;
	
//	@Autowired
//	SubmitedAssignmentsRepository submitedAssignmentsRepository;
	
//	public Student saveStudent(Student obj){
//      return studentRepository.save(obj);
//  }
	
	public void saveAssignment(Assignment assignment) {
		assignmentRepository.save(assignment);
	}
	
	//public SubmitedAssignments submitAssignment(SubmitedAssignments assignment) {
	//	return submitedAssignmentsRepository.save(assignment);
	//}
	
	
	public Assignment getAssignment(String course){
		
		Collection<Assignment> list = assignmentRepository.findAll();
		
		for(Assignment a : list) {
			
			if(a.getCourse().equals(course)) {
				return a;
			}
		}
		
		return null;
	}

}

