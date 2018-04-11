package com.alexpark.rest;

import com.alexpark.product.model.Product;
import com.alexpark.product.repository.ProductRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * @author Alex Park
 */
@RestController
@RequestMapping(value = "/api/products")
@CrossOrigin(origins = "*")
@Api(value = "The Shopping Shop")
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @GetMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
    @ApiOperation(value = "Get all Products", response = Product.class)
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @PostMapping()
    @ApiOperation(value = "Insert New Product", response = Product.class)
    public void saveProduct(@RequestBody @Valid Product product) {
        productRepository.save(product);
    }
}
