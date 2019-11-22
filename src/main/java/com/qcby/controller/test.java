package com.qcby.controller;/**
 * Created by myr on 2019/11/17.
 */

import ch.qos.logback.core.net.SyslogOutputStream;
import com.qcby.entity.CpnDepartment;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * @ClassNametest
 * @Description TODO
 * @Author myr
 * @Date 2019/11/17 16:54
 * @Version 1.0
 **/
public class test {
    public static void main(String[] args) throws FileNotFoundException {
        System.out.println(new Date().getTime());
        System.out.println(Calendar.getInstance().getTimeInMillis());
        System.out.println(System.currentTimeMillis());
        FileReader fr = new FileReader("src/main/resources/img/pengjian.jpg");
        System.out.println(fr.toString());
        String p = "86-18833280565";
        System.out.println(p.substring(0, 3));
        System.out.println(p.substring(3));
    }
}