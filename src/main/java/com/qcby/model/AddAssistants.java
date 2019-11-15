package com.qcby.model;

/**
 * @author 刘辉
 * @package_name com.qcby.model
 * @create 2019-11-13
 */
public class AddAssistants {
    private  String user_name;
    private String mobile;
    private Short gender;
    private String password;

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public short getGender() {
        return gender;
    }

    public void setGender(short gender) {
        this.gender = gender;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "AddAssistants{" +
                "user_name='" + user_name + '\'' +
                ", mobile='" + mobile + '\'' +
                ", gender=" + gender +
                ", password=" + password +
                '}';
    }
}
