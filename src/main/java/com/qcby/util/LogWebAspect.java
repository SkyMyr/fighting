package com.qcby.util;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.Date;

/**
 * @ClassNameLogWebAspect
 * @Description TODO
 * @Author myr
 * @Date 2019/11/20 19:54
 * @Version 1.0
 **/
@Aspect
@Component
public class LogWebAspect {
    private static final Logger logger = LoggerFactory.getLogger(LogWebAspect.class);

    @Pointcut("@annotation(com.qcby.util.Logweb)")
    public void LogPointcut() {}

    @Before("LogPointcut()")
    public void doBefore(JoinPoint joinPoint){
        System.out.println("aopaopaop&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
        // 接收到请求，记录请求内容
        logger.info("LogWebAspect.doBefore()");
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = attributes.getRequest();
        //有格式的打印日志，收集日志信息到ES
        logger.info(new Date().getTime()+"|" + request.getRequestURL().toString()+"|"+request.getMethod()+"|"+
                joinPoint.getSignature().getDeclaringTypeName() +"|"+ Arrays.toString(joinPoint.getArgs()));
        // 记录下请求内容
        logger.info("URL : " + request.getRequestURL().toString());

        logger.info("HTTP_METHOD : " + request.getMethod());

        logger.info("IP : " + request.getRemoteAddr());

        logger.info("CLASS_METHOD : " + joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature
                ().getName());

        logger.info("ARGS : " + Arrays.toString(joinPoint.getArgs()));
        //类方法
        logger.info("class_method={}",joinPoint.getSignature().getDeclaringTypeName()+
                "."+joinPoint.getSignature().getName());
        //参数
        logger.info("args={}",joinPoint.getArgs());
    }
    @AfterReturning(returning = "ret", pointcut = "LogPointcut()")
    public void doAfterReturning(Object ret) throws Throwable {
        // 处理完请求，返回内容
        logger.info("RESPONSE : " + ret);
    }


}
