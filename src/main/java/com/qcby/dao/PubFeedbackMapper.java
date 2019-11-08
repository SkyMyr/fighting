package com.qcby.dao;

import com.qcby.entity.PubFeedback;

public interface PubFeedbackMapper {
    int deleteByPrimaryKey(Long id);

    int insert(PubFeedback record);

    int insertSelective(PubFeedback record);

    PubFeedback selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(PubFeedback record);

    int updateByPrimaryKey(PubFeedback record);
}