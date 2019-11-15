package com.qcby.model;

/**
 * @author 刘辉
 * @package_name com.qcby.model
 * @create 2019-11-13
 */
public class VolunteerShare {
 private  String address;
 private String fromHeaderImg;
 private String fromHelperName;
 private String toHeaderImg;
 private String toHelperName;
 private String url;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getFromHeaderImg() {
        return fromHeaderImg;
    }

    public void setFromHeaderImg(String fromHeaderImg) {
        this.fromHeaderImg = fromHeaderImg;
    }

    public String getFromHelperName() {
        return fromHelperName;
    }

    public void setFromHelperName(String fromHelperName) {
        this.fromHelperName = fromHelperName;
    }

    public String getToHeaderImg() {
        return toHeaderImg;
    }

    public void setToHeaderImg(String toHeaderImg) {
        this.toHeaderImg = toHeaderImg;
    }

    public String getToHelperName() {
        return toHelperName;
    }

    public void setToHelperName(String toHelperName) {
        this.toHelperName = toHelperName;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
