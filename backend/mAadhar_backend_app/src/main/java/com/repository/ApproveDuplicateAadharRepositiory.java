package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.entity.ApproveDuplicateAadhar;
@Repository
public interface ApproveDuplicateAadharRepositiory extends JpaRepository<ApproveDuplicateAadhar, Long>{

	
	@Query("select c from ApproveDuplicateAadhar c where c.emailid=:emailid")
	public ApproveDuplicateAadhar findAppByEmailId(@Param("emailid") String emailid);
}