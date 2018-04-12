package com.alexpark.order;

import com.alexpark.order.repository.OrderRepository;
import com.alexpark.order.service.OrderServiceImpl;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class OrderServiceImplTest {

    @Mock
    OrderRepository mockRepository;

    @InjectMocks
    OrderServiceImpl fixture;

    @Test
    public void testListAll() {
    }
}
