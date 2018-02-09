package com.akvelon.server.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductPhoto extends Entity<Integer> {
    private Integer ProductPhotoID;
    private byte[] ThumbNailPhoto;
    private String ThumbnailPhotoFileName;
    private byte[] LargePhoto;
    private String LargePhotoFileName;
    private Timestamp ModifiedDate;

}
