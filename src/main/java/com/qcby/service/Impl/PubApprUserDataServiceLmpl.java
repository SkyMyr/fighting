package com.qcby.service.Impl;

import com.qcby.dao.PubApprUserDataMapper;
import com.qcby.entity.PubApprUserData;
import com.qcby.service.PubApprUserDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("pubApprUserDataService")
public class PubApprUserDataServiceLmpl implements PubApprUserDataService {
    @Autowired
    PubApprUserDataMapper pubApprUserDataMapper;
    @Override
    public PubApprUserData selectHelperAndTime(Integer id) {
        return pubApprUserDataMapper.selectHelperAndTime(id);
    }
}
