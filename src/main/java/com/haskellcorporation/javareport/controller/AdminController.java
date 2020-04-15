package com.haskellcorporation.javareport.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/dashboard/admin")
public class AdminController {
    @GetMapping("/")
    public String index() {
        return "dist/dashboard/pages/admin";
    }
}