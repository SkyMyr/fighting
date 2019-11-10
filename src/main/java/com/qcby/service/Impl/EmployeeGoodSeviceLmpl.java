package com.qcby.service.Impl;

import com.qcby.dao.EmployeeGoodMapper;
import com.qcby.model.EmployeeGood;
import com.qcby.service.EmployeeGoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("employeeGoodService")
public class EmployeeGoodSeviceLmpl implements EmployeeGoodService {
    @Autowired
    EmployeeGoodMapper employeeGoodMapper;
    @Override
    public List<EmployeeGood> findByTag() {
        return employeeGoodMapper.findByTag();
    }

    @Override
    public List<EmployeeGood> selectByName(String userName) {
        return employeeGoodMapper.selectByName(userName);
    }
}
