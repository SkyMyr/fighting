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

//    **
    int insertSelective(CpnUserDepartment record);

//    **
    int insert(CpnUserDepartment record);

}
