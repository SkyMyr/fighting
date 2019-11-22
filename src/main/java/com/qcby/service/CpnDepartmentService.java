package com.qcby.service;

import com.qcby.entity.CpnDepartment;

import java.util.List;

/**
 * @ClassNameCpnDepartmentService
 * @Description TODO
 * @Author myr
 * @Date 2019/11/20 9:38
 * @Version 1.0
 **/
public interface CpnDepartmentService {
    int deleteByPrimaryKey(Long id);

    //管理员注册时添加公司信息
    int insert(CpnDepartment record);

    int insertSelective(CpnDepartment record);

    CpnDepartment selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(CpnDepartment record);

    int updateByPrimaryKey(CpnDepartment record);

    List<CpnDepartment> selectDepartmentName(Long id);

    //添加部门
    int insertDepartment(CpnDepartment cpnDepartment);
}
