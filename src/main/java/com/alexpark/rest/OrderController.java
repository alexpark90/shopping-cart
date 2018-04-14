package com.alexpark.rest;

import com.alexpark.order.model.Order;
import com.alexpark.order.service.IOrderService;
import com.alexpark.product.model.Product;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

/**
 * @author Alex Park
 */
@RestController
@RequestMapping(value = "/api/orders")
@CrossOrigin(origins = "*")
@Api(value = "The Shopping Shop")
public class OrderController {

    @Autowired
    private IOrderService orderService;

    @GetMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
    @ApiOperation(value = "Get All Orders", response = Order.class)
    public List<Order> getOrderList() {
        return orderService.listAll();
    }

    @GetMapping(value="/{orderId}", produces = {MediaType.APPLICATION_JSON_VALUE})
    @ApiOperation(value = "Get A Order By {orderId}", response = Order.class)
    public Order getOrder(@PathVariable String orderId) {
        return orderService.getById(orderId);
    }

    @PostMapping()
    @ApiOperation(value = "Insert New Order")
    public ResponseEntity<String> saveProduct(@RequestBody @Valid Order order) {
        orderService.save(order);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
