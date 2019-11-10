package com.qcby.dao;

import com.qcby.model.EmployeeGood;

import java.util.List;

public interface EmployeeGoodMapper {

    List<EmployeeGood> findByTag();

    List<EmployeeGood> selectByName(String userName);
}