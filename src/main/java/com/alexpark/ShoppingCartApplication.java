package com.alexpark;

import com.alexpark.product.model.Product;
import com.alexpark.product.repository.ProductRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Profile;

import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.util.List;

/**
 * @author Alex Park
 */
@SpringBootApplication
@Profile("!test_embedded")
public class ShoppingCartApplication implements CommandLineRunner {

    @Autowired
    ProductRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(ShoppingCartApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        repository.deleteAll();
        loadData();
    }

    public void loadData() {
        ObjectMapper mapper = new ObjectMapper();
        TypeReference<List<Product>> mapType = new TypeReference<List<Product>>() {};
        InputStream is = TypeReference.class.getResourceAsStream("/data/mock-products.json");
        try {
            List<Product> productList = mapper.readValue(is, mapType);
            repository.saveAll(productList);
            System.out.println("Products list saved successfully");
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}
