package com.qcby.model;

import com.qcby.entity.HelpeesInfo;

import java.util.List;

public class PubApprModel {

    private String helpers;//确认完成后的施助方用户ID列表，使用“:"分隔

    private String header_img;

    private String first_name;

    private List<HelpeesInfo>  helpeesList;//确认完成后的受助方用户ID列表，使用“:"分隔

    public String getHelpers() {
        return helpers;
    }

    public void setHelpers(String helpers) {
        this.helpers = helpers;
    }

    public String getHeader_img() {
        return header_img;
    }

    public void setHeader_img(String header_img) {
        this.header_img = header_img;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public List<HelpeesInfo> getHelpeesList() {
        return helpeesList;
    }

    public void setHelpeesList(List<HelpeesInfo> helpeesList) {
        this.helpeesList = helpeesList;
    }

    @Override
    public String toString() {
        return "PubApprModel{" +
                "helpers='" + helpers + '\'' +
                ", header_img='" + header_img + '\'' +
                ", first_name='" + first_name + '\'' +
                ", helpeesList=" + helpeesList +
                '}';
    }
}
