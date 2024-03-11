package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.ApproveCitizens;
import com.entity.Login;
import com.repository.ApproveCitizensRepository;
import com.repository.LoginRepository;

@Service
public class ApproveCitizensService {

	@Autowired
	ApproveCitizensRepository approveCitizensRepository;
	
	@Autowired
	LoginRepository loginRepository;
	
	public String storeAppCitizensDetails(ApproveCitizens approveCitizens) {	
		Optional<Login> op = loginRepository.findById(approveCitizens.getEmailid());
		if(op.isPresent()) {
			return "Choose different emailid";
		}else {
			long count = approveCitizensRepository.count();
			approveCitizens.setAadharnumber(approveCitizens.getAadharnumber()+count);
			approveCitizensRepository.save(approveCitizens);
			
			Login ll = new Login();
			ll.setEmailid(approveCitizens.getEmailid());
			ll.setPassword(approveCitizens.getPassword());
			ll.setTypeofuser("Citizens");
			
			loginRepository.save(ll);
			
			return "Wait for Approvale";
		}
	}
	public String deleteApproveCitizens(long aadharid) {
		Optional<ApproveCitizens> result = approveCitizensRepository.findById(aadharid);
		if(result.isPresent()) {
			approveCitizensRepository.deleteById(aadharid);
			return "Citizen details approved successfully";
		}else {
			
			return "Citizen details not approved";
		}
	}
	public ApproveCitizens findAppCitizen(long aadharNumber) {	
		Optional<ApproveCitizens> op = approveCitizensRepository.findById(aadharNumber);
		if(op.isPresent()) {
			return op.get();
		}else {
			return null;
		}
	}
	
	public List<ApproveCitizens> findAllAppCitizens() {
		return approveCitizensRepository.findAll();
	}
	
	public ApproveCitizens findAppCitizenByEmailId(String emailid) {
		return approveCitizensRepository.findAppCitizenByEmailId(emailid);
	}
}
