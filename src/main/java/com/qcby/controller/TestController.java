package com.qcby.controller;

import com.qcby.dao.BlogMapper;
import com.qcby.dao.UserMapper;
import com.qcby.entity.Account;
import com.qcby.entity.Blog;
import com.qcby.entity.User;
import com.qcby.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import sun.text.resources.cldr.id.FormatData_id;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @ClassNameTestController
 * @Description 接收请求,发出响应   主要任务:和页面交互,验证参数
 * @Author myr
 * @Date 2019/11/1 16:42
 * @Version 1.0
 **/
@Controller
@RequestMapping("test")
public class TestController {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private BlogMapper blogMapper;

    @Autowired
    private BlogService blogService;

    @RequestMapping("index")
    public String goSongpeng(HttpServletRequest request, Model model){
        model.addAttribute("account","account");
        return "show";
    }

    @RequestMapping("zhongjian")
    public String zhongjian(HttpServletRequest request, Model model){
        return "index";
    }

    @RequestMapping("formsubmit1")
    public String goSongpeng1(HttpServletRequest request, Model model){
        model.addAttribute("account",request.getParameter("account"));
        return "show";
    }

    @RequestMapping("formsubmit2")//
    public String formsubmit2(Model model, @RequestParam("account")String account){//这里@RequestParam表示有一个映射关系 所以后面变量名并不严格  可以随便起，但是下面formsubmit3的话变量名必须严格和页面中的
        model.addAttribute("account",account);
        return "show";
    }

    @RequestMapping("formsubmit3")
    public String formsubmit3(Model model, String account){
        model.addAttribute("account",account);
        return "show";
    }

    @RequestMapping("formsubmit4")
    public String formsubmit4(Model model, Account account, User user){
        System.out.println(user.getAccount());//不同的对象有相同的域，当有这个域值时，会将所有的对象的域都赋这个值
        model.addAttribute("account",account.getAccount());
        return "show";
    }

    @RequestMapping("formsubmit5")
    @ResponseBody//和Ajax配合使用完美
    public Account formsubmit5( Account account){
        return account;
    }

    @RequestMapping("formsubmit6")
    public String formsubmit6(String[] ids){//http://localhost:8080/ssm/test/formsubmit6?ids=1&ids=2&ids=3&ids=4s tring数组get 提交格式       //当传的是一个对象数组的时候，用@requestbody User[] users传
        for (String id:ids) {
            System.out.println(id);
        }
        return "show";
    }
    //所有的文件上传都得走post

    @RequestMapping("formsubmit7")
    public String formsubmit4(Model model, Blog blog){
        List<Blog> list = blogService.findByTag(blog);
        for (Blog blog1:list) {
            System.out.println(blog1);
        }
        model.addAttribute("data",list);
//        userMapper.insert(user);
//        model.addAttribute("account",user.getAccount());
        return "show";
    }

    @RequestMapping("insertData")
    public String insertData(Model model, Blog blog){
        int result = blogService.insert(blog);
        if(result != 1)
            System.out.println("插入失败");
        return "redirect:showData";
    }
    @RequestMapping("deleteData")
    public String deleteData(Model model, Integer blogId){
        int result = blogService.deleteByPrimaryKey(blogId);
        if(result != 1)
            System.out.println("删除失败");
        return "redirect:showData";
    }
    @RequestMapping("updateData")
    public String updateData(Model model, Blog blog){
        int result = blogService.updateByPrimaryKey(blog);
        System.out.println(blog.toString());
        if(result != 1)
            System.out.println("更新失败");
        return "redirect:showData";
    }
    @RequestMapping("updateData1")
    public String updateData1(Model model, Integer blogId){
        Blog blog = blogMapper.selectByPrimaryKey(blogId);
        model.addAttribute("blog",blog);
        return "index";
    }
    @RequestMapping("showData")
    public String showData(Model model){
        List<Blog> blogs = blogService.selectAllRecords();
        model.addAttribute("data",blogs);
        return "show";
    }
}
