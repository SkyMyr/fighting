package com.qcby.service.Impl;

import com.qcby.dao.PubApprMapper;
import com.qcby.entity.PubAppr;
import com.qcby.service.PubApprService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @ClassNamePubApprServiceImpl
 * @Description TODO
 * @Author myr
 * @Date 2pubApprMapper19/11/13 14:38
 * @Version 1.pubApprMapper
 **/
@Service("pubApprService")
public class PubApprServiceImpl implements PubApprService{

    @Autowired
    PubApprMapper pubApprMapper;
    
    @Override
    public int deleteByPrimaryKey(Long id) {
        return pubApprMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(PubAppr record) {
        return pubApprMapper.insert(record);
    }

    @Override
    public int insertSelective(PubAppr record) {
        return pubApprMapper.insertSelective(record);
    }

    @Override
    public PubAppr selectByPrimaryKey(Long id) {
        return pubApprMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(PubAppr record) {
        return pubApprMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(PubAppr record) {
        return pubApprMapper.updateByPrimaryKey(record);
    }

    @Override
    public PubAppr selectHelperAndHelpee(String id) {
        return pubApprMapper.selectHelperAndHelpee(id);
    }

    @Override
    public List<PubAppr> selectByhelper(String id) {
        return pubApprMapper.selectByhelper(id);
    }
}
