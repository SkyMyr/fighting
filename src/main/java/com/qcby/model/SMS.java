package com.qcby.model;

import java.util.Arrays;

/**
 * @ClassNameSMS
 * @Description TODO
 * @Author myr
 * @Date 2019/11/8 15:03
 * @Version 1.0
 **/
public class SMS {
    private String code;
    private  String[] phoneNumbers;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String[] getPhoneNumbers() {
        return phoneNumbers;
    }

    public void setPhoneNumbers(String[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
    }

    @Override
    public String toString() {
        return "SMS{" +
                "code='" + code + '\'' +
                ", phoneNumbers=" + Arrays.toString(phoneNumbers) +
                '}';
    }
}
