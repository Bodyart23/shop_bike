package com.akvelon.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.akvelon.server.models.Product;
import com.akvelon.server.services.IproductService;

import java.sql.SQLException;
import java.util.List;

@RestController
public class Controller {
    @Autowired
    private IproductService iproductService;

    @Autowired
    @CrossOrigin(value = "*")
    @RequestMapping(value = "/")
    public String index() {
        return "index.html";
    }

    @CrossOrigin(value = "*")
    @RequestMapping(value = "/getAll")
    public List<Product> getAll() {
        return iproductService.getAll();
    }

    @CrossOrigin(value = "*")
    @RequestMapping(value = "/products/{id}")
    public Product getProduct(@PathVariable Integer id) {
        return iproductService.read(id);
    }

    @CrossOrigin(value = "*")
    @RequestMapping(value = "/getTopfive")
    public List<Product> getTopfive() {
        return iproductService.getTopfive();
    }

    @CrossOrigin(value = "*")
    @RequestMapping(value = "/delete/{key}")
    public Integer delete(@PathVariable Integer key) {
      return iproductService.delete(key);

    }

    @CrossOrigin(value = "*")
    @RequestMapping(value = "/products/create")
    public Integer create(@RequestBody Product product) throws SQLException {
        return iproductService.create(product);
    }

    @CrossOrigin(value = "*")
    @RequestMapping(value = "/products/update")
    public Integer update(@RequestBody Product product) throws SQLException {
        iproductService.update(product);
        return product.getId();

    }

    @CrossOrigin(value = "*")
    @RequestMapping(value = "/search/{searchRequest}/{count}")
    public List<Product> searchProduct(@PathVariable("searchRequest") String searchRequest, @PathVariable("count") Integer count) {
        return iproductService.searchProduct(searchRequest, count);
    }
}
