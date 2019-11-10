package com.qcby.model;

import org.apache.ibatis.annotations.Lang;

/**
 * @author LIUHUI
 * @package_name com.qcby.model
 * @create 2019-11-08
 */
public class AddPeople {
    private  String user_name;
    private String mobile;
    private Integer gender;
    private Long department_id;

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

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public Long getDepartment_id() {
        return department_id;
    }

    public void setDepartment_id(Long department_id) {
        this.department_id = department_id;
    }

    @Override
    public String toString() {
        return "AddPeople{" +
                "user_name='" + user_name + '\'' +
                ", mobile='" + mobile + '\'' +
                ", gender=" + gender +
                ", department_id=" + department_id +
                '}';
    }
}
