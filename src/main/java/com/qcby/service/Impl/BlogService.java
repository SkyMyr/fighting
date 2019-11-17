package com.qcby.serviceImpl;

import com.qcby.entity.Blog;

import java.util.List;

/**
 * Created by myr on 2019/11/2.
 */
public interface BlogService {

    List<Blog> findByTag(Blog blog);

    int insert(Blog record);

    int deleteByPrimaryKey(Integer id);

    int updateByPrimaryKey(Blog record);

    List<Blog> selectAllRecords();
}
