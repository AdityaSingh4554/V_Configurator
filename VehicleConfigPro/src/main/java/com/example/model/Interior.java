package com.example.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Interior {

	// Fields representing interior features
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String seatMaterial;
	private String airConditioningType;
	private int numberOfSpeakers;

	public String getSeatMaterial() {
		return seatMaterial;
	}

	public void setSeatMaterial(String seatMaterial) {
		this.seatMaterial = seatMaterial;
	}

	public String getAirConditioningType() {
		return airConditioningType;
	}

	public void setAirConditioningType(String airConditioningType) {
		this.airConditioningType = airConditioningType;
	}

	public int getNumberOfSpeakers() {
		return numberOfSpeakers;
	}

	public void setNumberOfSpeakers(int numberOfSpeakers) {
		this.numberOfSpeakers = numberOfSpeakers;
	}

	// toString Method for Displaying Information
	@Override
	public String toString() {
		return "CarInteriorFeatures{" + "seatMaterial='" + seatMaterial + '\'' + ", airConditioningType='"
				+ airConditioningType + '\'' + ", numberOfSpeakers=" + numberOfSpeakers + '}';
	}
}
