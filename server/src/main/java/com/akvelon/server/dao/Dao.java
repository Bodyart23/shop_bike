package com.akvelon.server.dao;

import java.sql.SQLException;
import java.util.List;

public interface Dao<K, V> {
    List<V> getAll();

    K create(V value) throws SQLException;

    V read(K key);

    void update(V value) throws SQLException;

    void delete(K key);

    <T> V readBy(String fieldName, T value);

    <T> List<V> readAllBy(String fieldName, T value);


}
