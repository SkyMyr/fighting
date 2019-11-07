package com.qcby.dao;

import com.qcby.entity.BigeventParticipant;

public interface BigeventParticipantMapper {
    int deleteByPrimaryKey(Long id);

    int insert(BigeventParticipant record);

    int insertSelective(BigeventParticipant record);

    BigeventParticipant selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(BigeventParticipant record);

    int updateByPrimaryKey(BigeventParticipant record);
}