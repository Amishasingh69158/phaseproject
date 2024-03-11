package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.entity.ApproveCitizens;
@Repository
public interface ApproveCitizensRepository extends JpaRepository<ApproveCitizens, Long>{

	
	@Query("select c from ApproveCitizens c where c.emailid=:emailid")
	public ApproveCitizens findAppCitizenByEmailId(@Param("emailid") String emailid);
}