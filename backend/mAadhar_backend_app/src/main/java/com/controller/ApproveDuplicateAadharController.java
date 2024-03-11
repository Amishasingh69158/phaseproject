package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.ApproveDuplicateAadhar;
import com.service.ApproveDuplicateAadharService;
@RestController
@RequestMapping("approveApply")
@CrossOrigin
public class ApproveDuplicateAadharController {
	
	@Autowired
	ApproveDuplicateAadharService approveDuplicateAadharService;
	
	@PostMapping(value = "requestAadhApprovle",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String createAppCitizensAccount(@RequestBody ApproveDuplicateAadhar approveCitizens) {
		System.out.println("Citizen Details"+approveCitizens);
		return approveDuplicateAadharService.storeCitizensDetails(approveCitizens);
	}
	
	@GetMapping(value = "findAllAadhApprovle",produces =MediaType.APPLICATION_JSON_VALUE)
	public List<ApproveDuplicateAadhar> findAll() {
		return approveDuplicateAadharService.findAllCitizens();
	}
	@DeleteMapping(value = "deleteAadhApprovle/{aadharNumber}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> deleteAppCitizen(@PathVariable("aadharNumber") long aadharNumber) {
		String message = approveDuplicateAadharService.deleteCitizens(aadharNumber);
	    return ResponseEntity.ok(message);	     
	}
}
