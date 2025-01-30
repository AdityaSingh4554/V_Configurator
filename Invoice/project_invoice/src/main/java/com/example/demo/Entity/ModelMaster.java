package com.example.demo.Entity;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Model_Master")
public class ModelMaster {
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int modelId;

	    @Column(nullable = false)
	    private String mdlName;

	    @ManyToOne
	    @JoinColumn(name = "mfg_id", nullable = false)
	    private MfgMaster mfgMaster;

	    @ManyToOne
	    @JoinColumn(name = "seg_id", nullable = false)
	    private SegmentMaster segmentMaster;

	    private Integer minQty;

	    @Column(precision = 10, scale = 2)
	    private BigDecimal price;

	    private String imagePath;

	    // Getters and Setters
	    public int getModelId() {
	        return modelId;
	    }
	    public void setModelId(int modelId) {
	        this.modelId = modelId;
	    }
	    public String getMdlName() {
	        return mdlName;
	    }
	    public void setMdlName(String mdlName) {
	        this.mdlName = mdlName;
	    }
	    public MfgMaster getMfgMaster() {
	        return mfgMaster;
	    }
	    public void setMfgMaster(MfgMaster mfgMaster) {
	        this.mfgMaster = mfgMaster;
	    }
	    public SegmentMaster getSegmentMaster() {
	        return segmentMaster;
	    }
	    public void setSegmentMaster(SegmentMaster segmentMaster) {
	        this.segmentMaster = segmentMaster;
	    }
	    public Integer getMinQty() {
	        return minQty;
	    }
	    public void setMinQty(Integer minQty) {
	        this.minQty = minQty;
	    }
	    public BigDecimal getPrice() {
	        return price;
	    }
	    public void setPrice(BigDecimal price) {
	        this.price = price;
	    }
	    public String getImagePath() {
	        return imagePath;
	    }
	    public void setImagePath(String imagePath) {
	        this.imagePath = imagePath;
	    }

}
