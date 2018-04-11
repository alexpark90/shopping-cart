package com.alexpark.product.repository;

import com.alexpark.product.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Alex Park
 */

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {
}
