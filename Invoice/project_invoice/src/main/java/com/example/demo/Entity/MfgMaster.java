package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Mfg_Master")
public class MfgMaster {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mfgId;

    @Column(nullable = false)
    private String mfgName;

    @ManyToOne
    @JoinColumn(name = "seg_id", nullable = false)
    private SegmentMaster segmentMaster;

    // Getters and Setters
    public int getMfgId() {
        return mfgId;
    }
    public void setMfgId(int mfgId) {
        this.mfgId = mfgId;
    }
    public String getMfgName() {
        return mfgName;
    }
    public void setMfgName(String mfgName) {
        this.mfgName = mfgName;
    }
    public SegmentMaster getSegmentMaster() {
        return segmentMaster;
    }
    public void setSegmentMaster(SegmentMaster segmentMaster) {
        this.segmentMaster = segmentMaster;
    }

}
