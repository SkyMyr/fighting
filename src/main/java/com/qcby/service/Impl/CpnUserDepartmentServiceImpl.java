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

    @Override
    public CpnUserDepartment selectByPrimaryKey(Long id) {
        return cpnUserDepartmentMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(CpnUserDepartment record) {
        return cpnUserDepartmentMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(CpnUserDepartment record) {
        return cpnUserDepartmentMapper.updateByPrimaryKey(record);
    }

    @Override
    public int deleteByPrimaryKey(Long id) {
        return cpnUserDepartmentMapper.deleteByPrimaryKey(id);
    }

    /**
     * 通过手机号返回实体
     * @param mobile 手机号
     * @return
     */
    @Override
    public CpnUserDepartment selectByPhone(String mobile) {
        return cpnUserDepartmentMapper.selectByPhone(mobile);
    }


}
