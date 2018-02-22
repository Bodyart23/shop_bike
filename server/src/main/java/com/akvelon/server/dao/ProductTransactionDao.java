
package com.akvelon.server.dao;

import com.akvelon.server.models.TransactionHistory;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
@Repository
public class ProductTransactionDao extends AbsIntDao<TransactionHistory> implements IproductTransactionDao{
    private static ProductTransactionDao productTransactionDao;
    private static RowMapper<TransactionHistory> rowMapper;

    private final String INSERT = "INSERT INTO transactionhistoryarchive (ProductID, ReferenceOrderID, ReferenceOrderLineID, TransactionDate, TransactionType, Quantity, ActualCost)VALUES (?,?,?,?,?,?,?)";
    private final String UPDATE = "UPDATE transactionhistoryarchive SET ProductID=?,ReferenceOrderID=?,ReferenceOrderLineID=?,TransactionDate=?,TransactionType=?,Quantity=?,ActualCost=?,WHERE TransactionID=?";

    protected ProductTransactionDao() {
        super(new TransactionHistory());
        if (productTransactionDao == null) {
            productTransactionDao = this;
            rowMapper = new RowMapper<TransactionHistory>() {
                @Override
                public TransactionHistory mapRow(ResultSet resultSet, int rowNum ) throws SQLException {
                    TransactionHistory transactionHistory = new TransactionHistory();
                    transactionHistory.setId(resultSet.getInt("TransactionID"));
                    transactionHistory.setProductID(resultSet.getInt("ProductID"));
                    transactionHistory.setReferenceOrderID(resultSet.getInt("ReferenceOrderID"));
                    transactionHistory.setReferenceOrderLineID(resultSet.getInt("ReferenceOrderLineID"));
                    transactionHistory.setTransactionDate(resultSet.getDate("TransactionDate"));
                    transactionHistory.setQuantity(resultSet.getInt("Quantity"));
                    transactionHistory.setTransactionType(resultSet.getString("TransactionType"));
                    transactionHistory.setActualCost(resultSet.getDouble("ActualCost"));
                    return transactionHistory;
                }
            };
        }
    }
    public static synchronized ProductTransactionDao getInstance(){
        if (productTransactionDao==null){
            productTransactionDao = new ProductTransactionDao();
        }
        return productTransactionDao;
    }

    @Override
    protected void setId(TransactionHistory value, KeyHolder keyHolder) {
        value.setId(keyHolder.getKey().intValue());
    }
    @Override
    protected RowMapper getRowMapper() {
        return rowMapper;
    }

    @Override
    protected PreparedStatement createInsertStatement(Connection connection, TransactionHistory value) throws SQLException {
        PreparedStatement ps = connection.prepareStatement(INSERT);
        int i = 0;

        ps.setInt(++i,value.getProductID());
        ps.setInt(++i,value.getReferenceOrderID());
        ps.setInt(++i,value.getReferenceOrderLineID());
        ps.setDate(++i,value.getTransactionDate());
        ps.setInt(++i,value.getQuantity());
        ps.setString(++i,value.getTransactionType());
        ps.setDouble(++i,value.getActualCost());
        return ps;
    }

    @Override
    protected PreparedStatement createUpdateStatement(Connection connection, TransactionHistory value) throws SQLException {
        PreparedStatement ps = connection.prepareStatement(UPDATE);
        int i = 0;

        ps.setInt(++i,value.getProductID());
        ps.setInt(++i,value.getReferenceOrderID());
        ps.setInt(++i,value.getReferenceOrderLineID());
        ps.setDate(++i,value.getTransactionDate());
        ps.setInt(++i,value.getQuantity());
        ps.setString(++i,value.getTransactionType());
        ps.setDouble(++i,value.getActualCost());
        return ps;
    }
}
