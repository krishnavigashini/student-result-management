package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.RModel;

import jakarta.transaction.Transactional;



@Repository
public interface RRepo extends JpaRepository<RModel,Integer>{
         @Modifying
         @Query(value= "insert into assign(name,email,assign,des) values(?,?,?,?)",nativeQuery =true)
         @Transactional
       
         public void save(String name, int regno,String email  ,String couse);
          @Modifying
          @Query(value="delete from assign where email=:name",nativeQuery=true)
          @Transactional
          public void delete(String name);


}