package com.alexpark.product.service;

import com.alexpark.product.model.Product;
import com.alexpark.product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Alex Park
 */
@Service
public class ProductServiceImpl implements IProductService {

    @Autowired
    ProductRepository productRepository;

    @Override
    public List<Product> listAll() {
        return productRepository.findAll();
    }

    @Override
    public Product getById(String id) {

        // TODO : Create a custom exception and handle properly
        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException());
        return product;
    }

    @Override
    public Product saveOrUpdate(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> saveAll(List<Product> products) {
        return productRepository.saveAll(products);
    }

    @Override
    public void delete(String id) {
        productRepository.deleteById(id);
    }
}
