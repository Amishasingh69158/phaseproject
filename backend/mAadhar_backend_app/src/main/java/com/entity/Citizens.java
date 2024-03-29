package com.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class Citizens {
@Id
private long aadharnumber=123412341234L;
private String name;
private LocalDate dob;
private String address;
private String password;
@Column(unique = true)
private String emailid;
@Column(unique = true)
private long phonenumber;
private String gender;
@Column(columnDefinition = "VARCHAR(255) DEFAULT 'alive'")
private String status;
private LocalDateTime	issue_date;
public LocalDateTime getIssue_date() {
	return issue_date;
}
public void setIssue_date(LocalDateTime issue_date) {
	this.issue_date = issue_date;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
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
public LocalDate getDob() {
	return dob;
}
public void setDob(LocalDate dob) {
	this.dob = dob;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
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
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}

}