package com.qcby.controller;/**
 * Created by myr on 2019/11/17.
 */

import ch.qos.logback.core.net.SyslogOutputStream;
import com.qcby.entity.CpnDepartment;

import java.util.ArrayList;
import java.util.List;

/**
 * @ClassNametest
 * @Description TODO
 * @Author myr
 * @Date 2019/11/17 16:54
 * @Version 1.0
 **/
public class test {
    public static void main(String[] args) {
        String p = "86-18833280565";
        System.out.println(p.substring(0, 3));
        System.out.println(p.substring(3));
        List<CpnDepartment> list = new ArrayList<>();
        List<depart> departs = new ArrayList<>();
        for (int i = 0; i < departs.size(); i++) {
            departs.get(i).setId(list.get(i).getId());
            departs.get(i).setName(list.get(i).getName());
        }
    }
}
class depart{
    private Long id;
    private  String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "depart{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}