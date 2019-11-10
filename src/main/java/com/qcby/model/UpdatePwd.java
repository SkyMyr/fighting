package com.qcby.model;

/**
 * @author LIUHUI
 * @package_name com.qcby.model
 * @create 2019-11-08
 */
public class UpdatePwd{
    private String userId;
    private String  mobile;
    private String newmobile;
    private String password;
    private String nation;

    public String getNewmobile() {
        return newmobile;
    }

    public void setNewmobile(String newmobile) {
        this.newmobile = newmobile;
    }

    public String getUserId() {
        return userId;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    @Override
    public String toString() {
        return "UpdatePwd{" +
                "userId='" + userId + '\'' +
                ", mobile='" + mobile + '\'' +
                ", newmobile='" + newmobile + '\'' +
                ", password='" + password + '\'' +
                ", nation='" + nation + '\'' +
                '}';
    }
}
