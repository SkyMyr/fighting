package com.qcby.util;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * @ClassNameCacheContextUtil
 * @Description content工具类
 * @Author myr
 * @Date 2019/11/4 13:24
 * @Version 1.0
 **/
@SuppressWarnings("static-access")
@Component
public class CacheContextUtil implements ApplicationContextAware {
    private static ApplicationContext commonApplicationContext;


    @Override
    public void setApplicationContext(ApplicationContext context) throws BeansException {
        this.commonApplicationContext = context;
    }


    /**
     * 根据提供的bean名称得到相应的服务类
     *
     * @param beanId bean的id
     * @return 返回bean的实例对象
     */
    public static Object getBean(String beanId) {
        return commonApplicationContext.getBean(beanId);
    }


    /**
     * 根据提供的bean名称得到对应于指定类型的服务类
     *
     * @param beanId bean的id
     * @param clazz  bean的类类型
     * @return 返回的bean类型, 若类型不匹配, 将抛出异常
     */
    public static <T> T getBean(String beanId, Class<T> clazz) {
        return commonApplicationContext.getBean(beanId, clazz);
    }
}