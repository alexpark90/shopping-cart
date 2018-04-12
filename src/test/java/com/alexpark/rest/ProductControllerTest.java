package com.alexpark.rest;

import com.alexpark.product.model.Product;
import com.alexpark.product.service.IProductService;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.isA;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(MockitoJUnitRunner.class)
public class ProductControllerTest {

    private static String API = "/api/products";

    @Mock
    private IProductService mockProductService;

    @InjectMocks
    ProductController fixture;

    private MockMvc mockMvc;
    private List<Product> mockProducts = new ArrayList<>();

    @Before
    public void before() {

        mockMvc = MockMvcBuilders
                    .standaloneSetup(fixture)
                    .build();

        Product product1 = new Product();
        product1.setId("id1");
        product1.setName("name1");
        product1.setPrice(BigDecimal.valueOf(123));
        product1.setImageUrl("url1");

        mockProducts.add(product1);
    }

    @Test
    public void testGetProductList() throws Exception {

        when(mockProductService.listAll()).thenReturn(mockProducts);

        mockMvc.perform(get(API))
                .andExpect(status().isOk());

        verify(mockProductService).listAll();
    }

    @Test
    public void testGetProductById() throws Exception {

        String productId = "productId";
        String productName = "foo";


        Product product = new Product();
        product.setId(productId);
        product.setName(productName);

        when(mockProductService.getById(productId)).thenReturn(product);

        mockMvc.perform(get(API + "/" + productId))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("$.name").value(productName));

        verify(mockProductService).getById(isA(String.class));
    }
}
