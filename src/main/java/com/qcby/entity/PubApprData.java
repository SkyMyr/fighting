package com.qcby.entity;

public class PubApprData {
    private Long user_id;

    private Long like_number;

    private Long comment_number;

    private Long update_at;

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public Long getLike_number() {
        return like_number;
    }

    public void setLike_number(Long like_number) {
        this.like_number = like_number;
    }

    public Long getComment_number() {
        return comment_number;
    }

    public void setComment_number(Long comment_number) {
        this.comment_number = comment_number;
    }

    public Long getUpdate_at() {
        return update_at;
    }

    public void setUpdate_at(Long update_at) {
        this.update_at = update_at;
    }
}