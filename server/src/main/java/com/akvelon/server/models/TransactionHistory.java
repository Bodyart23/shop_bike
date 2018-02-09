package com.akvelon.server.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionHistory extends Entity<Integer> {
    private Integer ProductID;
    private Integer ReferenceOrderID;
    private Integer ReferenceOrderLineID;
    private Date TransactionDate;
    private String TransactionType;
    private Integer Quantity;
    private Double ActualCost;


}
