package com.akvelon.server.services;

import com.akvelon.server.services.ProductService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import org.mockito.MockitoAnnotations;
import org.springframework.test.context.junit4.SpringRunner;
import com.akvelon.server.dao.ProductIntDao;
import com.akvelon.server.models.Product;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
public class ProductServiceTest {
    @Mock
    private ProductIntDao productIntDao;
    @InjectMocks
    private ProductService productService;

    private Product product;
    private List<Product> products;

    @Before
    public void setUp() throws Exception{
        MockitoAnnotations.initMocks(this);
        product = new Product();
        products = new ArrayList<>();

        product.setId(1);

        for (int i = 0; i < 5; i++){
            products.add(product);
        }
    }
    @Test
    public void getTopfive() {

        when(productIntDao.getTopfive()).thenReturn(products);
        List<Product> productList = productService.getTopfive();
        verify(productIntDao, times(1)).getTopfive();
        assertEquals(products, productList);
    }

    @Test
    public void getAll() {

        when(productIntDao.getAll()).thenReturn(products);
        List<Product> productList = productIntDao.getAll();
        verify(productIntDao, times(1)).getAll();
        assertEquals(products, productList);
    }

    @Test
    public void delete() {

        productIntDao.delete(1);
        verify(productIntDao, times(1)).delete(1);
    }

    @Test
    public void searchProduct() {

        when(productIntDao.searchProduct("Rover")).thenReturn(products);
        List<Product> productList = productService.searchProduct("Rover", 0);
        verify(productIntDao, times(1)).searchProduct("Rover");
        assertEquals(products, productList);
    }

    @Test
    public void read() {

        when(productIntDao.read(1)).thenReturn(product);
        Product product1 = productService.read(1);
        verify(productIntDao, times(1)).read(1);
        assertEquals(product, product1);
    }

    @Test
    public void update() throws SQLException {

        when(productIntDao.create(product)).thenReturn(1);
        productService.update(product);
        verify(productIntDao, times(1)).update(product);
    }

    @Test
    public void create() throws SQLException {

        when(productIntDao.create(product)).thenReturn(1);
        Integer productID = productService.create(product);
        verify(productIntDao, times(1)).create(product);
        assertEquals((Integer) 1, productID);
    }
}