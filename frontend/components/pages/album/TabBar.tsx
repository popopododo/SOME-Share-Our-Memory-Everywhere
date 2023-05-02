// 라이브러리
import React from "react";

//CSS
import styles from "styles/album.module.scss";

// 아이콘
import HeartIcon from "public/icons/Heart.svg";
import DotsIcon from "public/icons/DotsThreeOutline.svg";
import DownloadIcon from "public/icons/DownloadSimple.svg";
import TrashIcon from "public/icons/Trash.svg";
import UploadIcon from "public/icons/UploadSimple.svg";
import { useGetDetail, usePutDetail } from "@/pages/api/albumApi";

// 인터페이스
interface TabBarType {
  isSelect: boolean;
}
interface AlbumInfoType {
  id: number;
  name: string;
  members: MemberType[];
  categories: number[];
  totalId: number[];
  total: number;
  isLike: boolean;
  createdTime: string;
}

interface MemberType {
  id: number;
  name: string;
  img: string;
}

/**
 * 하단 탭바 컴포넌트
 * @param albumInfo 사진 정보 Object
 * @param setAlbumInfo 사진 정보 Object의 Setter 함수
 * @param isSelect 선택 여부
 * @returns
 */
function TabBar({ isSelect }: TabBarType) {
  const { getDetail } = useGetDetail();
  /**
   * 앨범 좋아요 수정
   */

  const { mutate } = usePutDetail();

  const clickLike = () => {
    if (getDetail) {
      getDetail.data = {
        ...getDetail.data,
        isLike: !getDetail.data.isLike,
      };
      // setAlbumInfo(albumInfo);
      // TODO : API 요청 보내기
      console.log("PUT", getDetail.data);

      mutate(getDetail.data);
    }
  };
  return (
    <section className={`${styles.tab_bar}`}>
      {isSelect ? (
        <>
          <UploadIcon />
          <DownloadIcon />
          <TrashIcon />
        </>
      ) : (
        <>
          <HeartIcon
            onClick={clickLike}
            width={"8.205vw"}
            height={"8.205vw"}
            stroke={getDetail?.data.isLike ? "none" : "#B1B8C0"}
            fill={getDetail?.data.isLike ? "red" : "none"}
          />
          <DotsIcon width={"8.205vw"} height={"8.205vw"} stroke={"#061C3D"} />
        </>
      )}
    </section>
  );
}

export default TabBar;
