package com.alacriti.empleavetool.vo;

public class EmpAuthVo {
	String email;
	String passWord;

	EmpAuthVo() {
	}

	public EmpAuthVo(String empId, String email, String passWord) {
		this.email = email;
		this.passWord = passWord;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassWord() {
		return passWord;
	}

	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}

}
