package com.qcby.dao;

import com.qcby.entity.Admin;
import org.apache.ibatis.annotations.Param;

public interface AdminMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Admin record);

    int insertSelective(Admin record);

    Admin selectByPrimaryKey(Long id);

    Admin selectByLogin(@Param("login_name")String login_name, @Param("password")String password);

    int updateByPrimaryKeySelective(Admin record);//没有空值被更新进去

    int updateByPrimaryKey(Admin record);
}