package com.qcby.model;

import java.math.BigDecimal;
import java.util.List;

public class PubApprModel {

//    private Long id;
//
//    private String title;//内容标题
//
//    private String custom_service_type;//自定义服务类型
//
//    private Integer service_type;//大事件的感恩中使用
//
//    private Integer service_time;//大事件的感恩中使用，单位：分钟
//
//    private Long bigevent_id;//
//
//    private Long occur_at;//发生时间-时间统一为UTC标准
//
//    private String content;//发生内容
//
//    private String address;//发生地点
//
//    private BigDecimal longitude;//发生地点经度
//
//    private BigDecimal latitude;//发生地点纬度
//
//    private Integer country_id;//
//
//    private Integer province_id;//
//
//    private Integer city_id;//
//
//    private Short type;//感恩类型,1---个人感恩(默认),2---组织感恩,3---对内置公众人物感恩
//
//    private Short person_type;//1---一对一感恩(默认),2---一对多感恩

    private List helpers;//确认完成后的施助方用户ID列表，使用“:"分隔

    private List helpees;//确认完成后的受助方用户ID列表，使用“:"分隔

    private List header_img;

    private List first_name;

    private List address;

    private List url;


//    private String country_code;//国家编码，中国是cn，美国是us
//
//    private String sn;//感恩编号，yyMMddHHmmss+8位随机码
//
//    private Short showed;//0-不显示（默认），1-显示
//
//    private Short opened;//0-不显示（默认），1-显示
//
//    private Short finished;//0-未完成(默认)，1-完成
//
//    private Short deleted;//0-未删除（默认），1-已删除
//
//    private Short reported;//0-无举报（默认），1-有举报
//
//    private Short credited;//0-失信（举报成功），1-正常（默认）
//
//    private Short pubresult;//所有人都确认后的结果，1-未知，2-同意，3-拒绝
//
//    private Long create_by;//创建人
//
//    private Long create_at;//创建时间
//
//    private Long update_at;//确认时间

    public List getHelpers() {
        return helpers;
    }

    public void setHelpers(List helpers) {
        this.helpers = helpers;
    }

    public List getHelpees() {
        return helpees;
    }

    public void setHelpees(List helpees) {
        this.helpees = helpees;
    }

    public List getHeader_img() {
        return header_img;
    }

    public void setHeader_img(List header_img) {
        this.header_img = header_img;
    }

    public List getFirst_name() {
        return first_name;
    }

    public void setFirst_name(List first_name) {
        this.first_name = first_name;
    }

    public List getAddress() {
        return address;
    }

    public void setAddress(List address) {
        this.address = address;
    }

    public List getUrl() {
        return url;
    }

    public void setUrl(List url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "PubApprModel{" +
                "helpers=" + helpers +
                ", helpees=" + helpees +
                ", header_img=" + header_img +
                ", first_name=" + first_name +
                ", address=" + address +
                ", url=" + url +
                '}';
    }
}
