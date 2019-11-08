package com.qcby.dao;

import com.qcby.entity.PubFeedbackImg;

public interface PubFeedbackImgMapper {
    int deleteByPrimaryKey(Long id);

    int insert(PubFeedbackImg record);

    int insertSelective(PubFeedbackImg record);

    PubFeedbackImg selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(PubFeedbackImg record);

    int updateByPrimaryKey(PubFeedbackImg record);
}