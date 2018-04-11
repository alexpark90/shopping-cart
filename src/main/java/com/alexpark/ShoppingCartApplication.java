package com.alexpark;

import com.alexpark.product.model.Product;
import com.alexpark.product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;

/**
 * @author Alex Park
 */
@SpringBootApplication
public class ShoppingCartApplication implements CommandLineRunner {

    @Autowired
    ProductRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(ShoppingCartApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        repository.deleteAll();

        Product product1 = new Product();
        product1.setName("test1");
        product1.setPrice(BigDecimal.valueOf(1000));
        product1.setImageUrl("http://test1.jpg");

        Product product2 = new Product();
        product2.setName("test2");
        product2.setPrice(BigDecimal.valueOf(5000));
        product2.setImageUrl("http://test2.jpg");

        repository.save(product1);
        repository.save(product2);
    }
//
//    public JSONArray loadMockDataFromJsonFile(String filename) {
//        return null;
//    }
}
