package com.akvelon.server.controller;

import com.akvelon.server.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.akvelon.server.models.Product;
import com.akvelon.server.services.IproductService;

import java.sql.SQLException;
import java.util.List;

@RestController
public class Controller {
    @Autowired
    private ProductService productService;

    @Autowired
    @CrossOrigin(value = "*")
    @RequestMapping(value = "/")
    public String index() {
        return "index.html";
    }

    @CrossOrigin(value = "*")
    @RequestMapping(value = "/getAll")
    public List<Product> getAll() {
        return productService.getAll();
    }

    @CrossOrigin(value = "*")
    @RequestMapping(value = "/products/{id}")
    public Product getProduct(@PathVariable Integer id) {
        return productService.read(id);
    }

    @CrossOrigin(value = "*")
    @RequestMapping(value = "/getTopfive")
    public List<Product> getTopfive() {
        return productService.getTopfive();
    }

    @CrossOrigin(value = "*")
    @RequestMapping(value = "/products/delete/{productID}")
    public Integer delete(@PathVariable ("productID") Integer productID) {
      return productService.delete(productID);

    }

    @CrossOrigin(value = "*")
    @RequestMapping(value = "/products/create")
    public Integer create(@RequestBody Product product) throws SQLException {
        return productService.create(product);
    }

    @CrossOrigin(value = "*")
    @RequestMapping(value = "/products/update")
    public Integer update(@RequestBody Product product) throws SQLException {
        productService.update(product);
        return product.getId();

    }

    @CrossOrigin(value = "*")
    @RequestMapping(value = "/search/{searchRequest}/{count}")
    public List<Product> searchProduct(@PathVariable("searchRequest") String searchRequest, @PathVariable("count") Integer count) {
        return productService.searchProduct(searchRequest, count);
    }
}
