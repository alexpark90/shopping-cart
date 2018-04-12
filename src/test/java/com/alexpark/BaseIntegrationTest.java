package com.alexpark;

import com.alexpark.config.EmbeddedMongoConfig;
import com.alexpark.config.TestMongoConfig;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ActiveProfiles("test_embedded")
@SpringBootTest(classes = {ShoppingCartApplicationTest.class, EmbeddedMongoConfig.class, TestMongoConfig.class},
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ContextConfiguration
public abstract class BaseIntegrationTest extends AbstractJUnit4SpringContextTests {
}
