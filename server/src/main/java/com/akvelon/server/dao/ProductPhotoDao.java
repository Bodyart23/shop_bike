package com.akvelon.server.dao;


import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import com.akvelon.server.models.ProductPhoto;

import javax.sql.rowset.serial.SerialBlob;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
@Repository
public class ProductPhotoDao extends AbsIntDao<ProductPhoto> implements IproductPhotoDao {
    private static ProductPhotoDao productPhotoDao;
    private static RowMapper<ProductPhoto> rowMapper;
    private static final String INSERT = "INSERT INTO productphoto (ThumbNailPhoto, ThumbnailPhotoFileName, LargePhoto, LargePhotoFileName) VALUES (?,?,?,?)";
    private static final String UPDATE = "UPDATE productphoto SET ThumbNailPhoto=?,ThumbnailPhotoFileName=?,LargePhoto=?,LargePhotoFileName=? WHERE ProductPhotoID=?";

    protected ProductPhotoDao() {
        super(new ProductPhoto());
        if (productPhotoDao == null) {
            productPhotoDao = this;
            rowMapper = new RowMapper<ProductPhoto>() {
                @Override
                public ProductPhoto mapRow(ResultSet resultSet, int rowNum) throws SQLException {
                    ProductPhoto productPhoto = new ProductPhoto();
                    productPhoto.setId(resultSet.getInt("ProductPhotoID"));
                    productPhoto.setThumbNailPhoto(resultSet.getBlob("ThumbNailPhoto").getBytes(1, (int)resultSet.getBlob("ThumbNailPhoto").length()));
                    productPhoto.setThumbnailPhotoFileName(resultSet.getString("ThumbnailPhotoFileName"));
                    productPhoto.setLargePhoto(resultSet.getBlob("LargePhoto").getBytes(1, (int)resultSet.getBlob("LargePhoto").length()));
                    productPhoto.setLargePhotoFileName(resultSet.getString("LargePhotoFileName"));
                    return productPhoto;
                }
            };
        }

    }
        public static synchronized ProductPhotoDao getInstance () {
            if (productPhotoDao == null) {
                productPhotoDao = new ProductPhotoDao() {

                };
            }
            return productPhotoDao;
        }
    @Override
    protected void setId(ProductPhoto value, KeyHolder keyHolder) {
        value.setId(keyHolder.getKey().intValue());
    }
    @Override
    protected RowMapper getRowMapper() {
        return rowMapper;
    }

    @Override
    protected PreparedStatement createInsertStatement(Connection connection, ProductPhoto value) throws SQLException {
        PreparedStatement ps = connection.prepareStatement(INSERT);
        int i = 0;
        ps.setInt(++i, value.getProductPhotoID());
        ps.setBlob(++i, new SerialBlob(value.getThumbNailPhoto()));
        ps.setString(++i, value.getThumbnailPhotoFileName());
        ps.setBlob(++i,new SerialBlob(value.getLargePhoto()));
        ps.setString(++i, value.getLargePhotoFileName());
        return ps;
    }

    @Override
    protected PreparedStatement createUpdateStatement(Connection connection, ProductPhoto value) throws SQLException {
        PreparedStatement ps = connection.prepareStatement(UPDATE);
        int i = 0;
        ps.setInt(++i, value.getProductPhotoID());
        ps.setBlob(++i, new SerialBlob(value.getThumbNailPhoto()));
        ps.setString(++i, value.getThumbnailPhotoFileName());
        ps.setBlob(++i,new SerialBlob(value.getLargePhoto()));
        ps.setString(++i, value.getLargePhotoFileName());
        return ps;
    }
}