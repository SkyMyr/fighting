package com.qcby.entity;

import java.util.List;

/**
 * @ClassNamehelpeesInfo
 * @Description 指定施助者的受助者信息列表
 * @Author myr
 * @Date 2019/11/17 15:41
 * @Version 1.0
 **/
public class HelpeesInfo {
    private String helpees;//确认完成后的施助方用户ID列表，使用“:"分隔

    private String helpees_img;

    private String helpees_name;

    private String address;

    private List url;

    private String content;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List getUrl() {
        return url;
    }

    public void setUrl(List url) {
        this.url = url;
    }

    public String getHelpees() {
        return helpees;
    }

    public void setHelpees(String helpees) {
        this.helpees = helpees;
    }

    public String getHelpees_img() {
        return helpees_img;
    }

    public void setHelpees_img(String helpees_img) {
        this.helpees_img = helpees_img;
    }

    public String getHelpees_name() {
        return helpees_name;
    }

    public void setHelpees_name(String helpees_name) {
        this.helpees_name = helpees_name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
