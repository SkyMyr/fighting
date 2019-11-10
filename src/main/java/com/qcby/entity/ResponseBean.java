package com.qcby.entity;

import java.util.Date;

/**
 * @ClassNameResponseBean
 * @Description 封装的json字符串
 * @Author myr
 * @Date 2019/11/6 19:38
 * @Version 1.0
 **/
public class ResponseBean<T> {

    private T data;
    private String msg = "success";
    private int code = 1;

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public T getDate() {
        return data;
    }

    public void setDate(T date) {
        this.data = date;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

}
