package com.alexpark.product;

import com.alexpark.product.model.Product;
import com.alexpark.product.repository.ProductRepository;
import com.alexpark.product.service.ProductServiceImpl;
import com.google.common.collect.ImmutableList;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.isA;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class ProductServiceImplTest {

    @Mock
    ProductRepository mockRepository;

    @InjectMocks
    ProductServiceImpl fixture;

    @Test
    public void testListAll() {

        Product product1 = new Product();
        product1.setId("id1");
        product1.setName("name1");
        product1.setPrice(BigDecimal.valueOf(123));
        product1.setImageUrl("url1");

        List<Product> products = ImmutableList.of(product1);

        when(mockRepository.findAll()).thenReturn(products);

        List<Product> result = fixture.listAll();

        assertEquals(products, result);

        verify(mockRepository).findAll();

    }

    @Test
    public void testGetById() {

        Product product1 = new Product();
        product1.setId("id1");
        product1.setName("name1");
        product1.setPrice(BigDecimal.valueOf(123));
        product1.setImageUrl("url1");

        when(mockRepository.findById(isA(String.class))).thenReturn(Optional.ofNullable(product1));

        Product result = fixture.getById("id1");

        assertEquals(product1, result);

        verify(mockRepository).findById(isA(String.class));
    }

    @Test(expected = RuntimeException.class)
    public void testGetById_whenProductNotExist() {

        when(mockRepository.findById(isA(String.class))).thenReturn(Optional.ofNullable(null));

        fixture.getById("id1");
    }

    @Test
    public void testSaveAll() {

        Product productToSave = new Product();
        productToSave.setId("id1");
        productToSave.setName("name1");
        productToSave.setPrice(BigDecimal.valueOf(123));
        productToSave.setImageUrl("url1");

        List<Product> products = ImmutableList.of(productToSave);

        when(mockRepository.saveAll(isA(List.class))).thenReturn(products);

        List<Product> result = fixture.saveAll(products);

        assertEquals(products, result);

        verify(mockRepository).saveAll(isA(List.class));
    }
}
