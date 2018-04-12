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

    private static final String ID = "id";
    private static final String NAME = "name";
    private static final String IMAGE_URL = "url";
    private static final BigDecimal PRICE = new BigDecimal(100);

    @Mock
    ProductRepository mockRepository;

    @InjectMocks
    ProductServiceImpl fixture;

    @Test
    public void testListAll() {

        List<Product> products = ImmutableList.of(createProduct());
        when(mockRepository.findAll()).thenReturn(products);

        List<Product> result = fixture.listAll();

        assertEquals(products, result);
        verify(mockRepository).findAll();
    }

    @Test
    public void testGetById() {

        Product product = createProduct();
        when(mockRepository.findById(isA(String.class))).thenReturn(Optional.ofNullable(product));

        Product result = fixture.getById(ID);

        assertEquals(product, result);
        verify(mockRepository).findById(isA(String.class));
    }

    @Test(expected = RuntimeException.class)
    public void testGetById_whenProductNotExist() {

        when(mockRepository.findById(isA(String.class))).thenReturn(Optional.ofNullable(null));

        fixture.getById(ID);
    }

    @Test
    public void testSaveAll() {

        Product productToSave = createProduct();

        List<Product> products = ImmutableList.of(productToSave);
        when(mockRepository.saveAll(isA(List.class))).thenReturn(products);

        List<Product> result = fixture.saveAll(products);

        assertEquals(products, result);
        verify(mockRepository).saveAll(isA(List.class));
    }

    private Product createProduct() {
        Product product = new Product();
        product.setId(ID);
        product.setName(NAME);
        product.setPrice(PRICE);
        product.setImageUrl(IMAGE_URL);

        return product;
    }
}
