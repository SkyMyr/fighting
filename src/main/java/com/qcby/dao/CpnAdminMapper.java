package com.qcby.dao;

import com.qcby.entity.CpnAdmin;

public interface CpnAdminMapper {
    int deleteByPrimaryKey(Long id);

    int insert(CpnAdmin record);

    int insertSelective(CpnAdmin record);

    CpnAdmin selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(CpnAdmin record);

    int updateByPrimaryKey(CpnAdmin record);
}