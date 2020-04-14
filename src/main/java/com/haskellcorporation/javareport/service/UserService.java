package com.haskellcorporation.javareport.service;

import com.haskellcorporation.javareport.model.User;
import com.haskellcorporation.javareport.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(final UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository
            .findByEmail(email)
            .orElseThrow(() -> new UsernameNotFoundException(
                "User with email \"" + email + "\" doesn't exist"
            ));
        return user;
    }
}