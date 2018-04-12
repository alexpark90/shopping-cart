package com.alexpark.rest;

import com.alexpark.order.service.IOrderService;
import com.alexpark.product.model.Product;
import com.alexpark.product.service.IProductService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(MockitoJUnitRunner.class)
public class OrderControllerTest {
    @Mock
    private IOrderService mockOrderService;

    @InjectMocks
    OrderController fixture;

    private MockMvc mockMvc;

    @Before
    public void before() {

        mockMvc = MockMvcBuilders
                .standaloneSetup(fixture)
                .build();
    }

    @Test
    public void testGetProductList() throws Exception {

        when(mockOrderService.listAll()).thenReturn(null);

        mockMvc.perform(get("/api/orders"))
                .andExpect(status().isOk());

        verify(mockOrderService).listAll();
    }
}
