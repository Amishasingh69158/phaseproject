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

import com.entity.ApproveCitizens;
import com.service.ApproveCitizensService;

@RestController
@RequestMapping("approveCitizens")
@CrossOrigin
public class ApproveCitizensController {

	@Autowired
	ApproveCitizensService approveCitizensService;
	
	@PostMapping(value = "requestAccount",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String createAppCitizensAccount(@RequestBody ApproveCitizens approveCitizens) {
		return approveCitizensService.storeAppCitizensDetails(approveCitizens);
	}
	
	@GetMapping(value = "findAllApprovelrequest",produces =MediaType.APPLICATION_JSON_VALUE)
	public List<ApproveCitizens> findAll() {
		return approveCitizensService.findAllAppCitizens();
	}
	
	@GetMapping(value = "searchAppCitizen/{aadharnumber}",produces =MediaType.APPLICATION_JSON_VALUE)
	public ApproveCitizens searchAppCitizen(@PathVariable("aadharnumber") long aadharnumber) {
		return approveCitizensService.findAppCitizen(aadharnumber);
	}
	
	@GetMapping(value = "searchAppCitizenByEmailId/{emailid}",produces =MediaType.APPLICATION_JSON_VALUE)
	public ApproveCitizens searchAppCitizenByEmailiId(@PathVariable("emailid") String emailid) {
		return approveCitizensService.findAppCitizenByEmailId(emailid);
	}
	@DeleteMapping(value = "deleteAppCitizen/{aadharNumber}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> deleteAppCitizen(@PathVariable("aadharNumber") long aadharNumber) {
		String message = approveCitizensService.deleteApproveCitizens(aadharNumber);
	    return ResponseEntity.ok(message);	     
	}

}
