package com.alexpark.rest;

import com.alexpark.product.model.Product;
import com.alexpark.product.service.IProductService;
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
@RequestMapping(value = "/api/products")
@CrossOrigin(origins = "*")
@Api(value = "The Shopping Shop")
public class ProductController {

    @Autowired
    IProductService productService;

    @GetMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
    @ApiOperation(value = "Get All Products", response = Product.class)
    public List<Product> getProductList() {
        return productService.listAll();
    }

    @GetMapping(value="/{productId}", produces = {MediaType.APPLICATION_JSON_VALUE})
    @ApiOperation(value = "Get A Order By {productId}", response = Product.class)
    public Product getProductById(@PathVariable String productId) {
        return productService.getById(productId);
    }

    @PostMapping()
    @ApiOperation(value = "Insert New Products")
    public ResponseEntity<String> saveProduct(@RequestBody @Valid List<Product> products) {
        productService.saveAll(products);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping(value = "/{productId}")
    @ApiOperation(value = "Update A Product By {productId}")
    public ResponseEntity<String> updateProduct(@RequestBody @Valid Product product, @PathVariable("productId") String productId) {
        productService.saveOrUpdate(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
