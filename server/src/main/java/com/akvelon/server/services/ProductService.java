package com.akvelon.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.akvelon.server.dao.ProductIntDao;
import com.akvelon.server.models.Product;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService implements IproductService {
    @Autowired
    private ProductIntDao productIntDao;


    @Override
    public List<Product> getTopfive() {
        return productIntDao.getTopfive();
    }

    @Override
    public List<Product> getAll() {
        return productIntDao.getAll();
    }

    @Override
    public Integer delete(Integer key) {
        productIntDao.delete(key);

        return key;
    }

    @Override
    public List<Product> searchProduct(String searchRequest, Integer count) {
        List<Product> products = productIntDao.searchProduct(searchRequest);
        List<Product> result = new ArrayList<>();

        for (int i = 0; i < (count + 1) * 20; i++) {
            if (i < products.size()) {
                result.add(products.get(i));
            } else {
                break;
            }
        }

        return result;
    }

    @Override
    public Product read(Integer key) {
        return productIntDao.read(key);
    }

    @Override
    public Integer update(Product value) throws SQLException {
        productIntDao.update(value);
        return null;
    }

    @Override
    public Integer create(Product product) throws SQLException {
        return productIntDao.create(product);
    }


}
