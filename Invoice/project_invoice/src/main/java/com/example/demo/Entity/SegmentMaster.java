package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Segment_Master")
public class SegmentMaster {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int segId;

    @Column(nullable = false)
    private String segName;

    // Getters and Setters
    public int getSegId() {
        return segId;
    }
    public void setSegId(int segId) {
        this.segId = segId;
    }
    public String getSegName() {
        return segName;
    }
    public void setSegName(String segName) {
        this.segName = segName;
    }

}
