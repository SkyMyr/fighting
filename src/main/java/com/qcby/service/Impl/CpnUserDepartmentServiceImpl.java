package com.qcby.service.Impl;

import com.qcby.dao.CpnUserDepartmentMapper;
import com.qcby.entity.CpnUserDepartment;
import com.qcby.service.CpnUserDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author LIUHUI
 * @package_name com.qcby.service
 * @create 2019-11-08
 */
@Service("cpnUserDepartmentService")
public class CpnUserDepartmentServiceImpl implements CpnUserDepartmentService {
@Autowired
    CpnUserDepartmentMapper cpnUserDepartmentMapper;


//**
    @Override
    public int insertSelective(CpnUserDepartment record) {
        return cpnUserDepartmentMapper.insertSelective(record);
    }
//**
   	@Override
	public int insert(CpnUserDepartment record) {
		return cpnUserDepartmentMapper.insert(record);
	}

}
