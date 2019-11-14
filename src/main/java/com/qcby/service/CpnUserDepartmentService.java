package com.qcby.service;

import com.qcby.entity.CpnUserDepartment;
import com.qcby.entity.User;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author LIUHUI
 * @package_name com.qcby.service
 * @create 2019-11-08
 */
public interface CpnUserDepartmentService {

    int deleteByPrimaryKey(Long id);

    int insert(CpnUserDepartment record);

    int insertSelective(CpnUserDepartment record);

    CpnUserDepartment selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(CpnUserDepartment record);

    int updateByPrimaryKey(CpnUserDepartment record);

    //通过手机号返回实体
    CpnUserDepartment selectByPhone(String mobile);
}
