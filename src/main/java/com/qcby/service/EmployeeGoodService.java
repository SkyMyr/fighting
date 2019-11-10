package com.qcby.service;


import com.qcby.model.EmployeeGood;

import java.util.List;

public interface EmployeeGoodService {
    List<EmployeeGood> findByTag();
    List<EmployeeGood> selectByName(String userName);
}
