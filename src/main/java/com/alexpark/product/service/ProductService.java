package com.alexpark.product.service;

import com.alexpark.product.model.Product;

import java.util.List;

/**
 * @author Alex Park
 */

public interface ProductService {

    List<Product> listAll();

    Product getById(String id);

    Product saveOrUpdate(Product product);

    void delete(String id);

}
