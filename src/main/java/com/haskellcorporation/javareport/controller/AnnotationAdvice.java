package com.haskellcorporation.javareport.controller;

import com.haskellcorporation.javareport.model.User;
import com.haskellcorporation.javareport.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

@ControllerAdvice
public class AnnotationAdvice {
    @Autowired
    private UserService userService;

    @ModelAttribute("user")
    public User getCurrentUser() {
        UserDetails userDetails = (UserDetails)
            SecurityContextHolder.getContext()
                                 .getAuthentication()
                                 .getPrincipal();
        return (User) userService
            .loadUserByUsername(userDetails.getUsername());
    }
}