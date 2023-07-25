package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.RModel;
import com.example.demo.repository.RRepo;
     @Service
public class RService {
   @Autowired
   RRepo repo;
   public void booking(RModel mod) {
  repo.save(mod.getName(),mod.getRegno(),mod.getEmail(),mod.getCourse());
   }
   public List<RModel> getdet()
   {
  return repo.findAll();
   }
   public RModel updatedetails(RModel st2)
{
return repo.saveAndFlush(st2);
}

public void deleteDetails(String sid)
{
repo.delete(sid);

}
 
}