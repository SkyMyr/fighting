package com.qcby.service.Impl;

import com.qcby.entity.Blog;
import com.qcby.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @ClassNameBlogServiceImpl
 * @Description 业务逻辑 +事务
 * @Author myr
 * @Date 2019/11/2 16:10
 * @Version 1.0
 **/
@Service("blogService")
public class BlogServiceImpl implements BlogService{

    @Autowired
    private BlogMapper blogMapper;

    @Override
    public List<Blog> findByTag(Blog blog) {
        //业务逻辑写在这里,比如查询一个数据是否在数据库然后根据结果进行处理
        List<Blog> list = blogMapper.findByTag(blog);
        return list;
    }

    @Override
    public int insert(Blog record) {
        return blogMapper.insert(record);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return blogMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKey(Blog record) {
        return blogMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<Blog> selectAllRecords() {
        return blogMapper.selectAllRecords();
    }
}
