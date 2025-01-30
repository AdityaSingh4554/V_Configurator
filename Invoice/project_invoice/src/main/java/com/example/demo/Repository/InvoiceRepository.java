package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Invoice;

public interface InvoiceRepository extends JpaRepository<Invoice, Integer>{

}
