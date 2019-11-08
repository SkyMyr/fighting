package com.qcby.dao;

import com.qcby.entity.PubUserSmsStatus;

public interface PubUserSmsStatusMapper {
    int deleteByPrimaryKey(Long id);

    int insert(PubUserSmsStatus record);

    int insertSelective(PubUserSmsStatus record);

    PubUserSmsStatus selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(PubUserSmsStatus record);

    int updateByPrimaryKey(PubUserSmsStatus record);
}