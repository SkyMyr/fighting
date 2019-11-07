package com.qcby.dao;

import com.qcby.entity.UserSmsStatus;

public interface UserSmsStatusMapper {
    int deleteByPrimaryKey(Long id);

    int insert(UserSmsStatus record);

    int insertSelective(UserSmsStatus record);

    UserSmsStatus selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(UserSmsStatus record);

    int updateByPrimaryKey(UserSmsStatus record);
}