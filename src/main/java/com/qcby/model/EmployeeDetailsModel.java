package com.qcby.model;

import com.qcby.entity.PubApprLike;

import java.util.List;

public class EmployeeDetailsModel {
    private String userId;//用户id
    private String loginName;//登录名称
    private Long apprNum;//感恩数量
    private Long goodThingsNum;//好事数量
    private Long serviceTime;//服务时间(分钟)
    private Long serviceHour;//服务时间(小时)
    private Long serviceMin;//最少服务时间
    private String imgUrl;//感恩图片url
    private String firstName;//昵称
    private List medals;//获得勋章数
    private String helpers;//确认完成后的施助方用户ID列表，使用“:"分隔
    private String  helpees;//确认完成后的受助方用户ID列表，使用“:"分隔


    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public Long getApprNum() {
        return apprNum;
    }

    public void setApprNum(Long apprNum) {
        this.apprNum = apprNum;
    }

    public Long getGoodThingsNum() {
        return goodThingsNum;
    }

    public void setGoodThingsNum(Long goodThingsNum) {
        this.goodThingsNum = goodThingsNum;
    }

    public Long getServiceTime() {
        return serviceTime;
    }

    public void setServiceTime(Long serviceTime) {
        this.serviceTime = serviceTime;
    }

    public Long getServiceHour() {
        return serviceHour;
    }

    public void setServiceHour(Long serviceHour) {
        this.serviceHour = serviceHour;
    }

    public Long getServiceMin() {
        return serviceMin;
    }

    public void setServiceMin(Long serviceMin) {
        this.serviceMin = serviceMin;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public List getMedals() {
        return medals;
    }

    public void setMedals(List medals) {
        this.medals = medals;
    }


    public String getHelpers() {
        return helpers;
    }

    public void setHelpers(String helpers) {
        this.helpers = helpers;
    }

    public String getHelpees() {
        return helpees;
    }

    public void setHelpees(String helpees) {
        this.helpees = helpees;
    }

    @Override
    public String toString() {
        return "EmployeeDetailsModel{" +
                "userId='" + userId + '\'' +
                ", loginName='" + loginName + '\'' +
                ", apprNum=" + apprNum +
                ", goodThingsNum=" + goodThingsNum +
                ", serviceTime=" + serviceTime +
                ", serviceHour=" + serviceHour +
                ", serviceMin=" + serviceMin +
                ", imgUrl='" + imgUrl + '\'' +
                ", firstName='" + firstName + '\'' +
                ", medals=" + medals +
                ", helpers='" + helpers + '\'' +
                ", helpees='" + helpees + '\'' +
                '}';
    }
}
