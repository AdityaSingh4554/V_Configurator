package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Interior;

import jakarta.transaction.Transactional;
@Repository
@Transactional
public interface InteriorRepository extends JpaRepository<Interior,Integer>{

}
