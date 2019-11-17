package com.qcby.dao;

import com.qcby.entity.PubApprLike;

public interface PubApprLikeMapper {
    int deleteByPrimaryKey(Long id);

    int insert(PubApprLike record);

    int insertSelective(PubApprLike record);

    PubApprLike selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(PubApprLike record);

    int updateByPrimaryKey(PubApprLike record);

    int selectApprCount(Integer id);
}