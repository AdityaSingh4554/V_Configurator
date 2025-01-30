package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Exterior;
import com.example.model.Interior;
import com.example.service.InteriorManager;
import com.example.service.ExteriorManager;

@RestController
@RequestMapping("/api")
public class IntExtController {

    @Autowired
    private InteriorManager interiorManager;
    
    @Autowired
    private ExteriorManager exteriorManager;

    @GetMapping("/interior")
    public List<Interior> getAllInteriorFeatures() {
        return interiorManager.getAllFeatures();
    }

    @GetMapping("/exterior")
    public List<Exterior> getAllExteriorFeatures() {
        return exteriorManager.getAllFeatures(); // Now fetches Exterior data
    }
}
