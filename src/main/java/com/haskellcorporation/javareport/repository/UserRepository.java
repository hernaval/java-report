package com.haskellcorporation.javareport.repository;

import com.haskellcorporation.javareport.model.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findById(Long id);

    @Query("SELECT user FROM User user WHERE user.email = ?1")
    Optional<User> findByEmail(String email);
}