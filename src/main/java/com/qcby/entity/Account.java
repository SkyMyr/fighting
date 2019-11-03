package com.qcby.entity;/**
 * Created by myr on 2019/11/1.
 */

/**
 * @ClassNameAccount
 * @Description TODO
 * @Author myr
 * @Date 2019/11/1 17:25
 * @Version 1.0
 **/
public class Account {
    private String account;
    private String sex;

    @Override
    public String toString() {
        return "Account{" +
                "account='" + account + '\'' +
                ", sex='" + sex + '\'' +
                '}';
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getAccount() {

        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }
}
