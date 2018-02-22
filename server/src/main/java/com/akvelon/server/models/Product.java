package com.akvelon.server.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.sql.Date;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
public class Product extends Entity<Integer> {
    private String Name;
    private String ProductNumber;
    private Boolean MakeFlag;
    private Boolean FinishedGoodsFlag;
    private String Color;
    private Integer SafetyStockLevel;
    private Integer ReorderPoint;
    private Double StandardCost;
    private Double ListPrice;
    private String Size;
    private String SizeUnitMeasureCode;
    private String WeightUnitMeasureCode;
    private Double Weight;
    private Integer DaysToManufacture;
    private String ProductLine;
    private String Style;
    private String ProductClass;
    private Integer ProductSubcategoryID;
    private Integer ProductModelID;
    private Date SellStartDate;
    private Date SellEndDate;
    private Date DiscontinuedDate;
    private String rowguid;
    private List<ProductPhoto> productPhotos;
    public Product() {
        this.rowguid = UUID.randomUUID().toString().toUpperCase();
    }
}
