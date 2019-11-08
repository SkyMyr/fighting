package com.qcby.entity;

public class PubApprImg {
    private Long id;

    private Long appr_id;

    private Short type;

    private Short store_type;

    private String aliyun_videoId;

    private String aliyun_imgurl;

    private String url;

    private Long size;

    private Long create_by;

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

    public Short getType() {
        return type;
    }

    public void setType(Short type) {
        this.type = type;
    }

    public Short getStore_type() {
        return store_type;
    }

    public void setStore_type(Short store_type) {
        this.store_type = store_type;
    }

    public String getAliyun_videoId() {
        return aliyun_videoId;
    }

    public void setAliyun_videoId(String aliyun_videoId) {
        this.aliyun_videoId = aliyun_videoId == null ? null : aliyun_videoId.trim();
    }

    public String getAliyun_imgurl() {
        return aliyun_imgurl;
    }

    public void setAliyun_imgurl(String aliyun_imgurl) {
        this.aliyun_imgurl = aliyun_imgurl == null ? null : aliyun_imgurl.trim();
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url == null ? null : url.trim();
    }

    public Long getSize() {
        return size;
    }

    public void setSize(Long size) {
        this.size = size;
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
}