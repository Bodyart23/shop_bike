package com.akvelon.server.services;


import java.sql.SQLException;
import java.util.List;

public interface Service<K, V> {
    List<V> getAll();

    Integer delete(K key);

    V read(K key);

    Integer update(V value) throws SQLException;

    K create(V value) throws SQLException;


}
