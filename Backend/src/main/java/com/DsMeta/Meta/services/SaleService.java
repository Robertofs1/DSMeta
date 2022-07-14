package com.DsMeta.Meta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DsMeta.Meta.entities.Sale;
import com.DsMeta.Meta.repositories.SaleRepository;

@Service
public class SaleService {
	@Autowired
	private SaleRepository repository;

	public List<Sale> findSales() {
		return repository.findAll();
	}

	
}
