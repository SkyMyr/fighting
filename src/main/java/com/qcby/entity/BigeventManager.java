package com.qcby.entity;

public class BigeventManager {
    private Long id;

    private String mobile;

    private String mail;

    private String name;

    private Long bigevent_id;

    private Short status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile == null ? null : mobile.trim();
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail == null ? null : mail.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Long getBigevent_id() {
        return bigevent_id;
    }

    public void setBigevent_id(Long bigevent_id) {
        this.bigevent_id = bigevent_id;
    }

    public Short getStatus() {
        return status;
    }

    public void setStatus(Short status) {
        this.status = status;
    }
}