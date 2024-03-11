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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Citizens;
import com.service.CitizensService;

@RestController
@RequestMapping("citizens")
@CrossOrigin
public class CitizensController {

	@Autowired
	CitizensService citizensService;
	
	@PostMapping(value = "createAccount",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String createCitizensAccount(@RequestBody Citizens citizens) {
		return citizensService.storeCitizensDetails(citizens);
	}
	@PutMapping(value = "updateAccount",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateCitizensAccount(@RequestBody Citizens citizens) {
		return citizensService.updateCitizenDetails(citizens);
	}
	
	@GetMapping(value = "findAll",produces =MediaType.APPLICATION_JSON_VALUE)
	public List<Citizens> findAll() {
		return citizensService.findAllCitizens();
	}
	@DeleteMapping(value = "deleteCitizen/{aadharNumber}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> deleteCitizen(@PathVariable("aadharNumber") long aadharNumber) {
		String message = citizensService.deleteCitizens(aadharNumber);
	    return ResponseEntity.ok(message);	     
	}
	
	@GetMapping(value = "searchCitizen/{aadharnumber}",produces =MediaType.APPLICATION_JSON_VALUE)
	public Citizens searchCitizen(@PathVariable("aadharnumber") long aadharnumber) {
		return citizensService.findCitizen(aadharnumber);
	}
	
	@GetMapping(value = "searchCitizenByEmailId/{emailid}",produces =MediaType.APPLICATION_JSON_VALUE)
	public Citizens searchCitizenByEmailiId(@PathVariable("emailid") String emailid) {
		return citizensService.findCitizenByEmailId(emailid);
	}
	
	@GetMapping(value = "findCitizenByStatus",produces =MediaType.APPLICATION_JSON_VALUE)
	public List<Citizens> findCitizenByStatus() {
		return citizensService.findCitizenByStatus();
	}
	
}