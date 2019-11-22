package com.qcby.service.Impl;

import com.qcby.dao.CpnDepartmentMapper;
import com.qcby.entity.CpnDepartment;
import com.qcby.service.CpnDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @ClassNameCpnDepartmentServiceImpl
 * @Description TODO
 * @Author myr
 * @Date 2019/11/20 9:39
 * @Version 1.0
 **/
@Service("cpnDepartmentService")
public class CpnDepartmentServiceImpl implements CpnDepartmentService {
    @Autowired
    CpnDepartmentMapper cpnDepartmentMapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return cpnDepartmentMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(CpnDepartment record) {
        return cpnDepartmentMapper.insert(record);
    }

    @Override
    public int insertSelective(CpnDepartment record) {
        return cpnDepartmentMapper.insertSelective(record);
    }

    @Override
    public CpnDepartment selectByPrimaryKey(Long id) {
        return cpnDepartmentMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(CpnDepartment record) {
        return cpnDepartmentMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(CpnDepartment record) {
        return cpnDepartmentMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<CpnDepartment> selectDepartmentName(Long id) {
        return cpnDepartmentMapper.selectDepartmentName(id);
    }

    @Override
    public int insertDepartment(CpnDepartment cpnDepartment) {
        return cpnDepartmentMapper.insertDepartment(cpnDepartment);
    }
}
