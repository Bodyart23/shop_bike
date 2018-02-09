package com.akvelon.server.models;

import lombok.Data;

@Data
public class Entity<T> {
    private T id;
}
