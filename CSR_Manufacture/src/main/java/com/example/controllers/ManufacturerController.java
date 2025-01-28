package com.example.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.entities.Manufacturer;
import com.example.services.ManufacturerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@CrossOrigin
@RequestMapping("/api/manufacturers")
public class ManufacturerController {

    private static final Logger logger = LoggerFactory.getLogger(ManufacturerController.class);

    @Autowired
    ManufacturerService manufacturerService;

    @GetMapping("/{segId}")
    public ResponseEntity<?> getManufacturers(@PathVariable(value ="segId") Long segId) {
        try {
            List<Manufacturer> manufacturers = manufacturerService.getAllManufacturersById(segId);
            return ResponseEntity.ok(manufacturers);
        } catch (Exception e) {
            logger.error("Error fetching manufacturers for Segment ID: {}", segId, e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to fetch manufacturers.");
        }
    }
}
