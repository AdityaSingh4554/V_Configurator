package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Exterior;

import jakarta.transaction.Transactional;
@Repository
@Transactional
public interface ExteriorRepository extends JpaRepository<Exterior,Integer>{

}
