package com.alexpark.order;

import com.alexpark.BaseIntegrationTest;
import com.alexpark.order.repository.OrderRepository;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class OrderRepositoryTest extends BaseIntegrationTest {

    @Autowired
    private OrderRepository fixture;

    @Before()
    public void before() {
    }

    @Test
    public void testFindAll() {
    }
}
