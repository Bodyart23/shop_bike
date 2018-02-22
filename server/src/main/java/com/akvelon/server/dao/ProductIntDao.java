package com.akvelon.server.dao;

import org.springframework.beans.factory.annotation.Autowired;
import com.akvelon.server.models.Product;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import com.akvelon.server.models.ProductPhoto;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class ProductIntDao extends AbsIntDao<Product> implements IproductDao {
    @Autowired
    private ProductPhotoDao productPhotoDao;
    private static ProductIntDao productIntDao;
    private static RowMapper<Product> rowMapper;


    private final String INSERT = "INSERT INTO product (Name, ProductNumber, MakeFlag, FinishedGoodsFlag, Color, SafetyStockLevel, ReorderPoint, StandardCost, ListPrice, Size, SizeUnitMeasureCode, WeightUnitMeasureCode, Weight, DaysToManufacture, ProductLine, Class, Style, ProductSubcategoryID, ProductModelID, SellStartDate, SellEndDate, DiscontinuedDate, rowguid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE Name = Name";
    private final String UPDATE = "UPDATE product SET Name=?,ProductNumber=?,makeFlag=?,FinishedGoodsFlag=?,Color=?,SafetyStockLevel=?," +
            "ReorderPoint=?,StandardCost=?,ListPrice=?,Size=?,SizeUnitMeasureCode=?,WeightUnitMeasureCode=?,Weight=?,DaysToManufacture=?," +
            "ProductLine=?,Style=?,ProductSubcategoryID=?,ProductModelID=?,rowguid=? WHERE ProductID=?";
    private final String GET_TOP_FIVE = "SELECT *, COUNT(*) FROM product AS t1 LEFT JOIN transactionhistoryarchive AS t2 ON t1.ProductID = t2.ProductID GROUP BY t1.ProductID ORDER BY COUNT(*) DESC LIMIT 10";
    private final String GET_PRODUCTPHOTO = "SELECT ProductPhotoID FROM productproductphoto WHERE ProductID = ?";
    private final String SEARCH = "SELECT * FROM product WHERE Name LIKE \"%%%s%%\"";
    protected ProductIntDao() {
        super(new Product());
        if (productIntDao == null) {
            productIntDao = this;
            rowMapper = new RowMapper<Product>() {
                public Product mapRow(ResultSet resultSet, int rowNum) throws SQLException {
                    Product product = new Product();
                    product.setId(resultSet.getInt("ProductID"));
                    product.setName(resultSet.getString("Name"));
                    product.setProductNumber(resultSet.getString("ProductNumber"));
                    product.setMakeFlag(resultSet.getBoolean("MakeFlag"));
                    product.setFinishedGoodsFlag(resultSet.getBoolean("FinishedGoodsFlag"));
                    product.setColor(resultSet.getString("Color"));
                    product.setSafetyStockLevel(resultSet.getInt("SafetyStockLevel"));
                    product.setReorderPoint(resultSet.getInt("ReorderPoint"));
                    product.setStandardCost(resultSet.getDouble("StandardCost"));
                    product.setListPrice(resultSet.getDouble("ListPrice"));
                    product.setSize(resultSet.getString("Size"));
                    product.setSizeUnitMeasureCode(resultSet.getString("SizeUnitMeasureCode"));
                    product.setWeightUnitMeasureCode(resultSet.getString("WeightUnitMeasureCode"));
                    product.setWeight(resultSet.getDouble("Weight"));
                    product.setDaysToManufacture(resultSet.getInt("DaysToManufacture"));
                    product.setProductLine(resultSet.getString("ProductLine"));
                    product.setStyle(resultSet.getString("Style"));
                    product.setProductClass(resultSet.getString("Class"));
                    product.setProductSubcategoryID(resultSet.getInt("ProductSubCategoryID"));
                    product.setProductModelID(resultSet.getInt("ProductModelID"));
                    product.setSellStartDate(resultSet.getDate("SellStartDate"));
                    product.setSellEndDate(resultSet.getDate("SellEndDate"));
                    product.setDiscontinuedDate(resultSet.getDate("DiscontinuedDate"));
                    product.setRowguid(resultSet.getString("rowguid"));
                    List<Integer> productPhotoIDList =  jdbcTemplate.queryForList(GET_PRODUCTPHOTO, new Object[] {product.getId()}, Integer.class);
                    List<ProductPhoto> productPhotos = new ArrayList<>();
                    for (Integer id : productPhotoIDList) {
                        productPhotos.add(productPhotoDao.read(id));
                    }

                    product.setProductPhotos(productPhotos);

                   return product;


                }
            };
        }

    }

    public static synchronized ProductIntDao getInstance() {
        if (productIntDao == null) {
            productIntDao = new ProductIntDao();
        }
        return productIntDao;
    }
    @Override
    protected void setId(Product value, KeyHolder keyHolder) {
        value.setId(keyHolder.getKey().intValue());
    }
    @Override
    public List<Product> getTopfive() {
        return jdbcTemplate.query(GET_TOP_FIVE, getRowMapper());
    }

    @Override
    public List<Product> searchProduct(String searchRequest) {
        String sql = String.format(SEARCH, searchRequest);
        return jdbcTemplate.query(sql, getRowMapper());
    }



    @Override
    protected RowMapper getRowMapper() {
        return rowMapper;
    }

    @Override
    protected PreparedStatement createInsertStatement(Connection connection, Product value) throws SQLException {
        PreparedStatement ps = connection.prepareStatement(INSERT, Statement.RETURN_GENERATED_KEYS);
        int i = 0;
//        ps.setInt(++i, value.getId());
        ps.setString(++i, value.getName());
        ps.setString(++i, value.getProductNumber());
        ps.setBoolean(++i, value.getMakeFlag());
        ps.setBoolean(++i, value.getFinishedGoodsFlag());
        ps.setString(++i, value.getColor());
        ps.setInt(++i, value.getSafetyStockLevel());
        ps.setInt(++i, value.getReorderPoint());
        ps.setDouble(++i, value.getStandardCost());
        ps.setDouble(++i, value.getListPrice());
        ps.setString(++i, value.getSize());
        ps.setString(++i, value.getSizeUnitMeasureCode());
        ps.setString(++i, value.getWeightUnitMeasureCode());
        ps.setDouble(++i, value.getWeight());
        ps.setInt(++i, value.getDaysToManufacture());
        ps.setString(++i, value.getProductLine());
        ps.setString(++i, value.getStyle());
        ps.setString(++i, value.getProductClass());
        ps.setInt(++i, value.getProductSubcategoryID());
        ps.setInt(++i, value.getProductModelID());
        ps.setDate(++i,  value.getSellStartDate());
        ps.setDate(++i,  value.getSellEndDate());
        ps.setDate(++i,  value.getDiscontinuedDate());
        ps.setString(++i, UUID.randomUUID().toString().toUpperCase());
        return ps;
    }

    @Override
    protected PreparedStatement createUpdateStatement(Connection connection, Product value) throws SQLException {
        PreparedStatement ps = connection.prepareStatement(UPDATE);
        int i = 0;
        ps.setInt(++i, value.getId());
        ps.setString(++i, value.getName());
        ps.setString(++i, value.getProductNumber());
        ps.setBoolean(++i, value.getMakeFlag());
        ps.setBoolean(++i, value.getFinishedGoodsFlag());
        ps.setString(++i, value.getColor());
        ps.setInt(++i, value.getSafetyStockLevel());
        ps.setInt(++i, value.getReorderPoint());
        ps.setDouble(++i, value.getStandardCost());
        ps.setDouble(++i, value.getListPrice());
        ps.setString(++i, value.getSize());
        ps.setString(++i, value.getSizeUnitMeasureCode());
        ps.setString(++i, value.getWeightUnitMeasureCode());
        ps.setDouble(++i, value.getWeight());
        ps.setInt(++i, value.getDaysToManufacture());
        ps.setString(++i, value.getProductLine());
        ps.setString(++i, value.getStyle());
        ps.setString(++i, value.getProductClass());
        ps.setInt(++i, value.getProductSubcategoryID());
        ps.setInt(++i, value.getProductModelID());
        ps.setDate(++i,  value.getSellStartDate());
        ps.setDate(++i,  value.getSellEndDate());
        ps.setDate(++i,  value.getDiscontinuedDate());
        ps.setString(++i, value.getRowguid());
        return ps;
    }


}
