package com.qcby.entity;

public class PubApprLike {
    private Long id;

    private Long appr_id;

    private Long user_id;

    private Long create_at;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAppr_id() {
        return appr_id;
    }

    public void setAppr_id(Long appr_id) {
        this.appr_id = appr_id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public Long getCreate_at() {
        return create_at;
    }

    public void setCreate_at(Long create_at) {
        this.create_at = create_at;
    }
}