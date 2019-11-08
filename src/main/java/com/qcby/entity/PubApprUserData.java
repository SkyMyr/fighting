package com.qcby.entity;

public class PubApprUserData {
    private Long id;

    private Long helpee_number;

    private Long helper_number;

    private Long service_time;

    private Long update_at;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getHelpee_number() {
        return helpee_number;
    }

    public void setHelpee_number(Long helpee_number) {
        this.helpee_number = helpee_number;
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

    public Long getUpdate_at() {
        return update_at;
    }

    public void setUpdate_at(Long update_at) {
        this.update_at = update_at;
    }
}