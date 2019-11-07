package com.qcby.dao;

import com.qcby.entity.ClassAssistant;

public interface ClassAssistantMapper {
    int deleteByPrimaryKey(Long id);

    int insert(ClassAssistant record);

    int insertSelective(ClassAssistant record);

    ClassAssistant selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(ClassAssistant record);

    int updateByPrimaryKey(ClassAssistant record);
}