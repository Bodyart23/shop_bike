package com.akvelon.server.dao;

import com.akvelon.server.models.Product;

import java.util.List;

public interface IproductDao extends Dao<Integer,Product> {
    public List<Product> getTopfive();
    List<Product> searchProduct(String searchRequest);

}
