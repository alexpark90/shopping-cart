package com.alexpark.order.service;

import com.alexpark.order.model.Order;
import com.alexpark.order.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


/**
 * @author Alex Park
 */
@Service
public class OrderServiceImpl implements IOrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public List<Order> listAll() {
        return orderRepository.findAll();
    }

    @Override
    public Order getById(String id) {

        Order order = orderRepository.findById(id).orElseThrow(() -> new RuntimeException());
        return order;
    }
}
