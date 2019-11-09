//package com.qcby.controller;
//
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//import javax.annotation.Resource;
//import javax.servlet.http.HttpServletRequest;
//
//import com.qcby.util.JwtUtil;
//import com.qcby.util.SnowflakeIdWorker;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//
//import com.qcby.entity.Article;
//import com.qcby.service.ArticleService;
//import org.springframework.web.bind.annotation.ResponseBody;
//
//@Controller
//@RequestMapping("login")
//public class LoginController {
//
//    @Autowired
////	@Resource 这两个二选一
//    private ArticleService articleService;
//
//    @RequestMapping("index")
//    public String index(Model model,HttpServletRequest request) {
//        model.addAttribute("name", "张三");
//        return "login";
//    }
//    //	@RequestMapping("login")
////	public String login(Model model,User user) {
////		System.err.println(user);
////		model.addAttribute("name", "张三");
////		return "login";
////	}
//    @RequestMapping("loginToken")
//    @ResponseBody
//    public Map loginToken(Model model, @RequestParam("account") String name, @RequestParam("pwd") String pwd) {
//        System.out.println("****************************************");
//        System.out.println(name);
//        System.out.println(pwd);
//        Map map = new HashMap();
//        if(name.equals("myr") && pwd .equals("666")){
//            Long id = SnowflakeIdWorker.generateId();
//            String token = JwtUtil.sign(id.toString());
//
//            map.put("code","you success!");
//        }
//        return map;
//    }
//    @RequestMapping("register")
//    public String register(Model model) {
//        return "register";
//    }
//    @RequestMapping("login1")
//    public String login1(Model model,@RequestParam("name") String name,@RequestParam("pwd") String pwd) {
//        System.err.println(name);
//        System.err.println(pwd);
//        model.addAttribute("name", "张三");
//        return "login";
//    }
//    @RequestMapping("login2")
//    public String login2(Model model,HttpServletRequest request) {
//        int id = 3;
//        Article  article= articleService.selectByPrimaryKey(id);
//        model.addAttribute("article", article);
//        return "login";
//    }
//    @RequestMapping("find")
//    public String find(Model model ,Article article) {
//        List<Article> selectList = articleService.selectList(article);
//        model.addAttribute("data", selectList);
//        return "login";
//    }
//    public void testGit(){
//        System.out.println("git 初体验123412412");
//    }
//    public void testGit1(){
//        System.out.println("git 初体验1");
//    }
//
//
//
//
//}
