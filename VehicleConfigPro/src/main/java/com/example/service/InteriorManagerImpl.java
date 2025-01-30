package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Interior;
import com.example.repository.InteriorRepository;
@Service
public class InteriorManagerImpl implements InteriorManager{
	@Autowired
	InteriorRepository r;

	@Override
	public List<Interior> getAllFeatures() {
		// TODO Auto-generated method stub
		return r.findAll();
	}

}
