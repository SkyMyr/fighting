package com.qcby.entity;

public class PubUser {
    private Long id;

    private String login_name;

    private String password;

    private Short type;

    private Short status;

    private Short deleted;

    private Long create_at;

    private Long update_at;

    private Long last_login_at;

    private String pwdcode;

    private Long pwdcode_expire;

    private Integer login_name_modify_times;

    private Long login_name_last_modify_at;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin_name() {
        return login_name;
    }

    public void setLogin_name(String login_name) {
        this.login_name = login_name == null ? null : login_name.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public Short getType() {
        return type;
    }

    public void setType(Short type) {
        this.type = type;
    }

    public Short getStatus() {
        return status;
    }

    public void setStatus(Short status) {
        this.status = status;
    }

    public Short getDeleted() {
        return deleted;
    }

    public void setDeleted(Short deleted) {
        this.deleted = deleted;
    }

    public Long getCreate_at() {
        return create_at;
    }

    public void setCreate_at(Long create_at) {
        this.create_at = create_at;
    }

    public Long getUpdate_at() {
        return update_at;
    }

    public void setUpdate_at(Long update_at) {
        this.update_at = update_at;
    }

    public Long getLast_login_at() {
        return last_login_at;
    }

    public void setLast_login_at(Long last_login_at) {
        this.last_login_at = last_login_at;
    }

    public String getPwdcode() {
        return pwdcode;
    }

    public void setPwdcode(String pwdcode) {
        this.pwdcode = pwdcode == null ? null : pwdcode.trim();
    }

    public Long getPwdcode_expire() {
        return pwdcode_expire;
    }

    public void setPwdcode_expire(Long pwdcode_expire) {
        this.pwdcode_expire = pwdcode_expire;
    }

    public Integer getLogin_name_modify_times() {
        return login_name_modify_times;
    }

    public void setLogin_name_modify_times(Integer login_name_modify_times) {
        this.login_name_modify_times = login_name_modify_times;
    }

    public Long getLogin_name_last_modify_at() {
        return login_name_last_modify_at;
    }

    public void setLogin_name_last_modify_at(Long login_name_last_modify_at) {
        this.login_name_last_modify_at = login_name_last_modify_at;
    }
}