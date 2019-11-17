
package com.qcby.service.Impl;
import com.qcby.dao.PubApprLikeMapper;
import com.qcby.entity.PubApprLike;
import com.qcby.service.PubApprLikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("pubApprLikeService")
public class PubApprLikeServiceLmpl implements PubApprLikeService {
    @Autowired
    PubApprLikeMapper pubApprLikeMapper;

    @Override
    public int selectApprCount(Integer id) {
        return pubApprLikeMapper.selectApprCount(id);
    }
}
