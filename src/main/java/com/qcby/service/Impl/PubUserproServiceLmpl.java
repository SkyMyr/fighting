package com.qcby.service.Impl;

import com.qcby.dao.PubUserproMapper;
import com.qcby.entity.PubUserpro;
import com.qcby.service.PubUserproService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("pubUserproService")
public class PubUserproServiceLmpl implements PubUserproService {
    @Autowired
    PubUserproMapper pubUserproMapper;
    @Override
    public PubUserpro selectUserImgAndName(Integer id) {
        return pubUserproMapper.selectUserImgAndName(id);
    }

    @Override
    public PubUserpro selectHelperAddrAndImg(Integer id) {
        return pubUserproMapper.selectHelperAddrAndImg(id);
    }
}
