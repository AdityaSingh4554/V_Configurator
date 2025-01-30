package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Exterior;
import com.example.repository.ExteriorRepository;

@Service
public class ExteriorManagerImpl implements ExteriorManager {

    @Autowired
    private ExteriorRepository repository;

    @Override
    public List<Exterior> getAllFeatures() {
        return repository.findAll(); // Fetches all the Exterior features from the database
    }
}
