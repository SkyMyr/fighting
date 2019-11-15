package com.qcby.service.Impl;

import com.qcby.dao.PubApprImgMapper;
import com.qcby.entity.PubApprImg;
import com.qcby.service.PubApprImgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("pubApprImgService")
public class PubApprImgServiceLmpl implements PubApprImgService {
    @Autowired
    PubApprImgMapper pubApprImgMapper;
    @Override
    public List<PubApprImg> selectUrl() {
        return pubApprImgMapper.selectUrl();
    }
}
