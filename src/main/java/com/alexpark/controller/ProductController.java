package com.alexpark.controller;

import com.alexpark.product.model.Product;
import com.alexpark.product.repository.ProductRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

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
}

//@Controller
//public class ProductController {
//    private ProductService productService;
//
//    private ProductToProductForm productToProductForm;
//
//    @Autowired
//    public void setProductToProductForm(ProductToProductForm productToProductForm) {
//        this.productToProductForm = productToProductForm;
//    }
//
//    @Autowired
//    public void setProductService(ProductService productService) {
//        this.productService = productService;
//    }
//
//    @RequestMapping("/")
//    public String redirToList(){
//        return "redirect:/product/list";
//    }
//
//    @RequestMapping({"/product/list", "/product"})
//    public String listProducts(Model model){
//        model.addAttribute("products", productService.listAll());
//        return "product/list";
//    }
//
//    @RequestMapping("/product/show/{id}")
//    public String getProduct(@PathVariable String id, Model model){
//        model.addAttribute("product", productService.getById(id));
//        return "product/show";
//    }
//
//    @RequestMapping("product/edit/{id}")
//    public String edit(@PathVariable String id, Model model){
//        Product product = productService.getById(id);
//        ProductForm productForm = productToProductForm.convert(product);
//
//        model.addAttribute("productForm", productForm);
//        return "product/productform";
//    }
//
//    @RequestMapping("/product/new")
//    public String newProduct(Model model){
//        model.addAttribute("productForm", new ProductForm());
//        return "product/productform";
//    }
//
//    @RequestMapping(value = "/product", method = RequestMethod.POST)
//    public String saveOrUpdateProduct(@Valid ProductForm productForm, BindingResult bindingResult){
//
//        if(bindingResult.hasErrors()){
//            return "product/productform";
//        }
//
//        Product savedProduct = productService.saveOrUpdateProduct(productForm);
//
//        return "redirect:/product/show/" + savedProduct.getId();
//    }
//
//    @RequestMapping("/product/delete/{id}")
//    public String delete(@PathVariable String id){
//        productService.delete(id);
//        return "redirect:/product/list";
//    }
//}
