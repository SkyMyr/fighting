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

    private T date;
    private String msg = "success";
    private int code = 1;

    public T getDate() {
        return date;
    }

    public void setDate(T date) {
        this.date = date;
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
