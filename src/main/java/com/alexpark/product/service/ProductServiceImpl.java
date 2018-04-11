package com.alexpark.product.service;

import com.alexpark.product.repository.ProductRepository;
import com.alexpark.product.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class ProductServiceImpl {

    @Autowired
    private ProductRepository productRepository;

}
