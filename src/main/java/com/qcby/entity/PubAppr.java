package com.qcby.entity;

import java.math.BigDecimal;

public class PubAppr {
    private Long id;

    private String title;

    private String custom_service_type;

    private Integer service_type;

    private Integer service_time;

    private Long bigevent_id;

    private Long occur_at;

    private String content;

    private String address;

    private BigDecimal longitude;

    private BigDecimal latitude;

    private Integer country_id;

    private Integer province_id;

    private Integer city_id;

    private Short type;

    private Short person_type;

    private String helpers;

    private String helpees;

    private String country_code;

    private String sn;

    private Short showed;

    private Short opened;

    private Short finished;

    private Short deleted;

    private Short reported;

    private Short credited;

    private Short pubresult;

    private Long create_by;

    private Long create_at;

    private Long update_at;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public String getCustom_service_type() {
        return custom_service_type;
    }

    public void setCustom_service_type(String custom_service_type) {
        this.custom_service_type = custom_service_type == null ? null : custom_service_type.trim();
    }

    public Integer getService_type() {
        return service_type;
    }

    public void setService_type(Integer service_type) {
        this.service_type = service_type;
    }

    public Integer getService_time() {
        return service_time;
    }

    public void setService_time(Integer service_time) {
        this.service_time = service_time;
    }

    public Long getBigevent_id() {
        return bigevent_id;
    }

    public void setBigevent_id(Long bigevent_id) {
        this.bigevent_id = bigevent_id;
    }

    public Long getOccur_at() {
        return occur_at;
    }

    public void setOccur_at(Long occur_at) {
        this.occur_at = occur_at;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public BigDecimal getLongitude() {
        return longitude;
    }

    public void setLongitude(BigDecimal longitude) {
        this.longitude = longitude;
    }

    public BigDecimal getLatitude() {
        return latitude;
    }

    public void setLatitude(BigDecimal latitude) {
        this.latitude = latitude;
    }

    public Integer getCountry_id() {
        return country_id;
    }

    public void setCountry_id(Integer country_id) {
        this.country_id = country_id;
    }

    public Integer getProvince_id() {
        return province_id;
    }

    public void setProvince_id(Integer province_id) {
        this.province_id = province_id;
    }

    public Integer getCity_id() {
        return city_id;
    }

    public void setCity_id(Integer city_id) {
        this.city_id = city_id;
    }

    public Short getType() {
        return type;
    }

    public void setType(Short type) {
        this.type = type;
    }

    public Short getPerson_type() {
        return person_type;
    }

    public void setPerson_type(Short person_type) {
        this.person_type = person_type;
    }

    public String getHelpers() {
        return helpers;
    }

    public void setHelpers(String helpers) {
        this.helpers = helpers == null ? null : helpers.trim();
    }

    public String getHelpees() {
        return helpees;
    }

    public void setHelpees(String helpees) {
        this.helpees = helpees == null ? null : helpees.trim();
    }

    public String getCountry_code() {
        return country_code;
    }

    public void setCountry_code(String country_code) {
        this.country_code = country_code == null ? null : country_code.trim();
    }

    public String getSn() {
        return sn;
    }

    public void setSn(String sn) {
        this.sn = sn == null ? null : sn.trim();
    }

    public Short getShowed() {
        return showed;
    }

    public void setShowed(Short showed) {
        this.showed = showed;
    }

    public Short getOpened() {
        return opened;
    }

    public void setOpened(Short opened) {
        this.opened = opened;
    }

    public Short getFinished() {
        return finished;
    }

    public void setFinished(Short finished) {
        this.finished = finished;
    }

    public Short getDeleted() {
        return deleted;
    }

    public void setDeleted(Short deleted) {
        this.deleted = deleted;
    }

    public Short getReported() {
        return reported;
    }

    public void setReported(Short reported) {
        this.reported = reported;
    }

    public Short getCredited() {
        return credited;
    }

    public void setCredited(Short credited) {
        this.credited = credited;
    }

    public Short getPubresult() {
        return pubresult;
    }

    public void setPubresult(Short pubresult) {
        this.pubresult = pubresult;
    }

    public Long getCreate_by() {
        return create_by;
    }

    public void setCreate_by(Long create_by) {
        this.create_by = create_by;
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
}