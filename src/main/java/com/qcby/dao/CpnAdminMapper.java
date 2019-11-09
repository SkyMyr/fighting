package com.qcby.dao;

import com.qcby.entity.CpnAdmin;
import org.apache.ibatis.annotations.Param;

public interface CpnAdminMapper {
    int deleteByPrimaryKey(Long id);

    int insert(CpnAdmin record);

    int insertSelective(CpnAdmin record);

    CpnAdmin selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(CpnAdmin record);

    int updateByPrimaryKey(CpnAdmin record);

    CpnAdmin selectByLogin(@Param("login_name")String login_name, @Param("password")String password);
}