package com.qcby.dao;

import com.qcby.entity.FeedbackImg;

public interface FeedbackImgMapper {
    int deleteByPrimaryKey(Long id);

    int insert(FeedbackImg record);

    int insertSelective(FeedbackImg record);

    FeedbackImg selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(FeedbackImg record);

    int updateByPrimaryKey(FeedbackImg record);
}