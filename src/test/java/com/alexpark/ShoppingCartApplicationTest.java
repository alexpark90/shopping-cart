package com.alexpark;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Profile;

@SpringBootApplication
@ComponentScan("com.alexpark")
@Profile("test_embedded")
public class ShoppingCartApplicationTest {
    public static void main(String[] args) throws Exception {
        SpringApplication.run(ShoppingCartApplicationTest.class, args);
    }
}
