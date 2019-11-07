package com.qcby.entity;

public class AdminVolunteer {
    private Long id;

    private Long admin_id;

    private Long volunteer_org_id;

    private Byte status;

    private Long create_at;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAdmin_id() {
        return admin_id;
    }

    public void setAdmin_id(Long admin_id) {
        this.admin_id = admin_id;
    }

    public Long getVolunteer_org_id() {
        return volunteer_org_id;
    }

    public void setVolunteer_org_id(Long volunteer_org_id) {
        this.volunteer_org_id = volunteer_org_id;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public Long getCreate_at() {
        return create_at;
    }

    public void setCreate_at(Long create_at) {
        this.create_at = create_at;
    }
}