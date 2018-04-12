package com.alexpark.product;

import com.alexpark.BaseIntegrationTest;
import com.alexpark.product.model.Product;
import com.alexpark.product.repository.ProductRepository;
import com.google.common.collect.ImmutableList;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import java.math.BigDecimal;
import java.util.List;

import static org.junit.Assert.assertEquals;

public class ProductRepositoryTest extends BaseIntegrationTest {

    @Autowired
    private ProductRepository fixture;

    @Before()
    public void before() {
        setUpProductData();
    }

    @Test
    public void testFindAll() {

        List<Product> result = fixture.findAll();

        assertEquals("should returned 2 products", 2, result.size());
        assertEquals("should returned the id field", "id1", result.get(0).getId());
        assertEquals("should returned the name field", "test1", result.get(0).getName());
        assertEquals("should returned the price field", BigDecimal.valueOf(1000), result.get(0).getPrice());
        assertEquals("should returned the imageUrl field", "http://test1.jpg", result.get(0).getImageUrl());
    }

    private void setUpProductData() {

        Product product1 = new Product();
        product1.setId("id1");
        product1.setName("test1");
        product1.setPrice(BigDecimal.valueOf(1000));
        product1.setImageUrl("http://test1.jpg");

        Product product2 = new Product();
        product2.setId("id2");
        product2.setName("test2");
        product2.setPrice(BigDecimal.valueOf(5000));
        product2.setImageUrl("http://test2.jpg");

        List<Product> products = ImmutableList.of(product1, product2);
        fixture.saveAll(products);
    }
}
