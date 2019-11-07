package com.qcby.model;

//筛选
public class FilterAll {

    private int goodNum;//好人好事数量
    private int serviceName;//服务类型,先用id传
    private int serviceHour;//服务小时
    private int getServiceMin;//服务分钟
    private int innerNum;//内部互助数量
    private int departmentName;//部门名称,先用id传
    private int isSix;//是否66天,1是,2否

    public int getGoodNum() {
        return goodNum;
    }

    public void setGoodNum(int goodNum) {
        this.goodNum = goodNum;
    }

    public int getServiceName() {
        return serviceName;
    }

    public void setServiceName(int serviceName) {
        this.serviceName = serviceName;
    }

    public int getServiceHour() {
        return serviceHour;
    }

    public void setServiceHour(int serviceHour) {
        this.serviceHour = serviceHour;
    }

    public int getGetServiceMin() {
        return getServiceMin;
    }

    public void setGetServiceMin(int getServiceMin) {
        this.getServiceMin = getServiceMin;
    }

    public int getInnerNum() {
        return innerNum;
    }

    public void setInnerNum(int innerNum) {
        this.innerNum = innerNum;
    }

    public int getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(int departmentName) {
        this.departmentName = departmentName;
    }

    public int getIsSix() {
        return isSix;
    }

    public void setIsSix(int isSix) {
        this.isSix = isSix;
    }
}
