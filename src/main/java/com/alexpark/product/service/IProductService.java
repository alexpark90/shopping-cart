package com.alexpark.product.service;

import com.alexpark.product.model.Product;

import java.util.List;

/**
 * @author Alex Park
 */
public interface IProductService {

    List<Product> listAll();

    Product getById(String id);

    Product update(String id, Product product);

    List<Product> saveAll(List<Product> products);

    void delete(String id);
}
