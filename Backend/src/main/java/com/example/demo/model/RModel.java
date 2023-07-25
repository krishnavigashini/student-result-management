package com.example.demo.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="assign1")
public class RModel {
private String name;
private int regno;
@Id
private String email;
private String course;
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public int getRegno() {
	return regno;
}
public void setRegno(int regno) {
	this.regno = regno;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getCourse() {
	return course;
}
public void setCourse(String course) {
	this.course = course;
}
public RModel(String name, int regno, String email, String course) {
	super();
	this.name = name;
	this.regno = regno;
	this.email = email;
	this.course = course;
}

}