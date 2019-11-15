package com.qcby.dao;

import com.qcby.entity.Pc_admin;

public interface Pc_adminMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Pc_admin record);

    int insertSelective(Pc_admin record);

    Pc_admin selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Pc_admin record);

    int updateByPrimaryKey(Pc_admin record);
}