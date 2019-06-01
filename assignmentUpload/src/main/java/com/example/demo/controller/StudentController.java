package com.example.demo.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Assignment;
import com.example.demo.service.StudentServiceImpl;

import java.io.IOException;
import java.util.Collection;

import org.bson.types.ObjectId;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;



@RestController
@CrossOrigin
public class StudentController {
	
//	@Autowired
//StudentServiceImpl studentServiceImpl;
	
    /*to save a SystemUser*/
//	@RequestMapping(value = "/savestudent", method = RequestMethod.POST)
//	public ResponseEntity<Student> saveStudentDetails(@Valid @RequestBody Student student) {
//		try {
//			//Save SystemUser
//			Student obj = studentServiceImpl.saveStudent(student);
//			return new ResponseEntity<>(obj, HttpStatus.OK);
//		} catch (Exception ex) {
//			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}

	
	/*
	 * This method will submit the assignment with respective data
	 */
//	@RequestMapping(value = CommonConstants.ADD_NEW_ASSIGNMENT, method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	@Autowired
StudentServiceImpl studentServiceImpl;
	
	@RequestMapping(value = "/saveassignment", method = RequestMethod.POST)
	public ResponseEntity<Object> submitAssignment(@RequestParam("file") MultipartFile file,
			@RequestParam("subject") String subject,
			@RequestParam("assignmentName") String assignmentName,
			@RequestParam("description") String description,
			@RequestParam("dueDate") String dueDate,
			@RequestParam("startDate") String startDate) 
			throws IOException {
		
		Assignment assgnment = new Assignment();
		assgnment.set_id(new ObjectId());
		assgnment.setFile(file.getBytes());
		assgnment.setCourse(subject);
		assgnment.setAssignmentName(assignmentName);
		assgnment.setDescription(description);
		assgnment.setDueDate(dueDate);
		assgnment.setStartDate(startDate);
		studentServiceImpl.saveAssignment(assgnment);

		return new ResponseEntity<>(assgnment, HttpStatus.OK);
		
	}
	
	
//    /*getCourses List*/
//	@RequestMapping(value = "/getassignment/{course}", method = RequestMethod.GET)
//	public ResponseEntity <Assignment> getAssignment(@PathVariable String course) {
//		try {
//			Assignment assignment = StudentServiceImpl.getAssignment(course);
//			return new ResponseEntity<>(assignment, HttpStatus.OK);
//		} catch (Exception ex) {
//			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}
	
	
	
//	@RequestMapping(value = "/submitassignment", method = RequestMethod.POST)
//	public ResponseEntity<Object> submitAssignments(@RequestParam("file") MultipartFile file,
//			@RequestParam("subject") String subject,
//			@RequestParam("description") String description) 
//			throws IOException {
//		
//		SubmitedAssignments assgnment = new SubmitedAssignments();
//		assgnment.set_id(new ObjectId());
//		assgnment.setFile(file.getBytes());
//		assgnment.setCourse(subject);
//		assgnment.setDescription(description);
//		studentServiceImpl.submitAssignment(assgnment);
//
//		return new ResponseEntity<>(assgnment, HttpStatus.OK);
//		
//	}
	

}

