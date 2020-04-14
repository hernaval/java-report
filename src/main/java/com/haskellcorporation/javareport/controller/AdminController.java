package com.haskellcorporation.javareport.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminController {
    @GetMapping("/dashboard")
    public String test() {
        return "dist/custom/pages/user/dashboard";
    }
}