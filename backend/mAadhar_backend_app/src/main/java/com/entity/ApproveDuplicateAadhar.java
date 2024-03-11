
package com.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class ApproveDuplicateAadhar {
@Id
private long aadharnumber;
private String name;
private String massage;

@Column(unique = true)
private String emailid;
@Column(unique = true)
private long phonenumber;
public long getAadharnumber() {
	return aadharnumber;
}
public void setAadharnumber(long aadharnumber) {
	this.aadharnumber = aadharnumber;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}

public String getEmailid() {
	return emailid;
}
public void setEmailid(String emailid) {
	this.emailid = emailid;
}
public long getPhonenumber() {
	return phonenumber;
}
public void setPhonenumber(long phonenumber) {
	this.phonenumber = phonenumber;
}
public String getMassage() {
	return massage;
}
public void setMassage(String massage) {
	this.massage = massage;
}


}