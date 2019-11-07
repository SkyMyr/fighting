package com.qcby.dao;

import com.qcby.entity.UserBigevent;

public interface UserBigeventMapper {
    int deleteByPrimaryKey(Long id);

    int insert(UserBigevent record);

    int insertSelective(UserBigevent record);

    UserBigevent selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(UserBigevent record);

    int updateByPrimaryKey(UserBigevent record);
}