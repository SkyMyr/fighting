package com.qcby.model;

import com.qcby.entity.CpnUserDepartment;
import com.qcby.entity.PubApprUserData;
import com.qcby.entity.PubUserpro;

//筛选
public class EmployeeGood {
    private String update_at;
    private String header_img;
    private String user_name;
    private Integer gender;
    private Long department_id;
    private Long helper_number;
    private Long service_time;
    private Byte status;
    private Long helpee_number;
    private Byte sms_status;

    public String getUpdate_at() {
        return update_at;
    }

    public void setUpdate_at(String update_at) {
        this.update_at = update_at;
    }

    public String getHeader_img() {
        return header_img;
    }

    public void setHeader_img(String header_img) {
        this.header_img = header_img;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
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

    public Long getHelper_number() {
        return helper_number;
    }

    public void setHelper_number(Long helper_number) {
        this.helper_number = helper_number;
    }

    public Long getService_time() {
        return service_time;
    }

    public void setService_time(Long service_time) {
        this.service_time = service_time;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public Long getHelpee_number() {
        return helpee_number;
    }

    public void setHelpee_number(Long helpee_number) {
        this.helpee_number = helpee_number;
    }

    public Byte getSms_status() {
        return sms_status;
    }

    public void setSms_status(Byte sms_status) {
        this.sms_status = sms_status;
    }

    @Override
    public String toString() {
        return "EmployeeGood{" +
                "header_img='" + header_img + '\'' +
                ", user_name='" + user_name + '\'' +
                ", gender=" + gender +
                ", department_id=" + department_id +
                ", helper_number=" + helper_number +
                ", service_time=" + service_time +
                ", status=" + status +
                ", helpee_number=" + helpee_number +
                ", sms_status=" + sms_status +
                '}';
    }
}
