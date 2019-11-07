package com.qcby.model;

public class LoginModel {

    private String loginName;
    private String password;
    private  Long uuId;

    public Long getUuId() {
        return uuId;
    }

    public void setUuId(Long uuId) {
        this.uuId = uuId;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "LoginModel{" +
                "loginName='" + loginName + '\'' +
                ", password='" + password + '\'' +
                ", uuId=" + uuId +
                '}';
    }
}
