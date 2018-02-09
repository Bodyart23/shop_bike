package com.akvelon.server.services;

import com.akvelon.server.models.Product;

import java.util.List;

public interface IproductService extends Service<Integer,Product> {
    List<Product> getTopfive();
    List<Product> searchProduct(String searchRequest, Integer count);

}
