package com.alexpark.order.service;

import com.alexpark.order.model.Order;

import java.util.List;
import java.util.Optional;

/**
 * @author Alex Park
 */

public interface IOrderService {

    List<Order> listAll();

    Order getById(String id);

    Order saveOrUpdate(Order order);

    void delete(String id);

}
