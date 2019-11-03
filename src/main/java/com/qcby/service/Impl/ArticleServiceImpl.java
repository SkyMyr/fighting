package com.qcby.service.Impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qcby.dao.ArticleMapper;
import com.qcby.entity.Article;
import com.qcby.service.ArticleService;

@Service("articleService")
public class ArticleServiceImpl implements ArticleService {
	@Autowired
	private ArticleMapper articleMapper;
	@Override
	public Article selectByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return articleMapper.selectByPrimaryKey(id);
	}
	@Override
	public List<Article> selectList(Article record) {
		// TODO Auto-generated method stub
//		Article article1=new  Article();
//		article1.setAuthor("qcby");
//		article1.setTitle(record.getTitle()+"sssss");
//		articleMapper.insert(article1);
		return articleMapper.selectList(record);
	}
}
