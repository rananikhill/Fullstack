package com.signuppage.signup.service;

import com.signuppage.signup.model.User;
import com.signuppage.signup.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    //functions methods to fetch the data using taking input from user
    @Autowired
    private UserRepository userRepository;
    public List<User> getAllUsers(){
        List<User>users=new ArrayList<>();
        userRepository.findAll().forEach(user -> users.add(user));
        return users;
    }
    public Optional<User> getUserInfo(String email){
        return userRepository.findById(email);
    }
    public void addUser(User user){
        userRepository.save(user);
    }
//    public Optional<User> deleteUser(String email){
//        Optional<User> user=userRepository.findById(email);
//        userRepository.deleteById(email);
//        return user;
//    }


}
