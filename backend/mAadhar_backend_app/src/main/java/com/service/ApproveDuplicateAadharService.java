
package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.ApproveDuplicateAadhar;
import com.entity.Citizens;
import com.entity.Login;
import com.repository.ApproveDuplicateAadharRepositiory;
import com.repository.CitizensRepository;
import com.repository.LoginRepository;

@Service
public class ApproveDuplicateAadharService {
	
	@Autowired
	ApproveDuplicateAadharRepositiory approveDuplicateAadharRepositiory;
	
	@Autowired
	LoginRepository loginRepository;
	
public String storeCitizensDetails(ApproveDuplicateAadhar citizens) {	
				
			//long count = approveDuplicateAadharRepositiory.count();
		//	citizens.setAadharnumber(citizens.getAadharnumber());
		//	citizens.setEmailid(citizens.getEmailid());

			approveDuplicateAadharRepositiory.save(citizens);
			
			
			return "Account Created";
		
		
	}
	
	
	public List<ApproveDuplicateAadhar> findAllCitizens() {
		return approveDuplicateAadharRepositiory.findAll();
	}
	
	public String deleteCitizens(long aadharid) {
		Optional<ApproveDuplicateAadhar> result = approveDuplicateAadharRepositiory.findById(aadharid);
		if(result.isPresent()) {
			approveDuplicateAadharRepositiory.deleteById(aadharid);
			return "Citizen details deleted successfully";
		}else {
			
			return "Citizen details not deleted";
		}
	}
}
