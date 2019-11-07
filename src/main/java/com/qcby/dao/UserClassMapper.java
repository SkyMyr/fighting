package com.qcby.dao;

import com.qcby.entity.UserClass;

public interface UserClassMapper {
    int deleteByPrimaryKey(Long id);

    int insert(UserClass record);

    int insertSelective(UserClass record);

    UserClass selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(UserClass record);

    int updateByPrimaryKey(UserClass record);
}