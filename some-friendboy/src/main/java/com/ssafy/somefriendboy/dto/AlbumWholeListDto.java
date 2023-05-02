package com.ssafy.somefriendboy.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AlbumWholeListDto {
    @JsonProperty("album_id")
    private Long albumId;

    @JsonProperty("album_name")
    private String albumName;

    @JsonProperty("album_created_date")
    private LocalDateTime albumCreatedDate;

    // 표지사진
    @JsonProperty("thumbnail_photo_url")
    private String thumbnail_photo_url;

    // 즐겨찾기 여부
    @JsonProperty("isAlbumFav")
    private boolean isAlbumFav;
}
