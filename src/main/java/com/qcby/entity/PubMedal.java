package com.qcby.entity;

public class PubMedal {
    private Integer id;

    private Long grant_to;

    private Short medal_type;

    private Long donate_fee;

    private Long grant_at;

    private Short status;

    private String grant_desc;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Long getGrant_to() {
        return grant_to;
    }

    public void setGrant_to(Long grant_to) {
        this.grant_to = grant_to;
    }

    public Short getMedal_type() {
        return medal_type;
    }

    public void setMedal_type(Short medal_type) {
        this.medal_type = medal_type;
    }

    public Long getDonate_fee() {
        return donate_fee;
    }

    public void setDonate_fee(Long donate_fee) {
        this.donate_fee = donate_fee;
    }

    public Long getGrant_at() {
        return grant_at;
    }

    public void setGrant_at(Long grant_at) {
        this.grant_at = grant_at;
    }

    public Short getStatus() {
        return status;
    }

    public void setStatus(Short status) {
        this.status = status;
    }

    public String getGrant_desc() {
        return grant_desc;
    }

    public void setGrant_desc(String grant_desc) {
        this.grant_desc = grant_desc == null ? null : grant_desc.trim();
    }
}