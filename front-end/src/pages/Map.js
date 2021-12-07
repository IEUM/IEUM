/*global kakao*/
import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  Wrapper,
  LocationBox,
  Image,
  HospitalListSearchBox,
  HospitalListRow,
} from "./Presenter/Presenter";

import Location from "../assets/location.png";
import ArrowBack from "../assets/arrow_back.png";
import Text from "../components/Text";
import Button from "../components/Button";
import palette from "../styles/palette";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MapBox = styled.div`
  width: 100%;
  height: 56vh;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${palette.darkBlack};
  margin: 1rem 1rem 0rem 1rem;
  border-radius: 10px;
  color: ${(props) => props.color || "white"};
  height: 12rem;
`;

const { kakao } = window;

const Map = ({ location }) => {
  const where = location.state.where;
  const result = location.state.result;

  console.log(result);

  useEffect(() => {
    mapScript();
  }, []);

  const mapScript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(result[0].y, result[0].x),
      level: 3,
    };

    //map
    const map = new kakao.maps.Map(container, options);
    result.forEach((el) => {
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.y, el.x),
        title: el.hospital_name,
        clickable: true,
      });

      // 마커에 표시할 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
        content: "<div  style='color:black'>" + el.hospital_name + "</div>", // 인포윈도우에 표시할 내용
      });

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
    });
    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false, //자동으로 넘김
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Wrapper alignItems="none">
      <LocationBox>
        <Image src={Location} />
        <Text marginRight="3">{where}</Text>
        <Image src={ArrowBack} />
      </LocationBox>
      <HospitalListSearchBox>
        <HospitalListRow>
          <Text size="24px">{result.length} 개의 결과</Text>
          <Button
            name="지도 닫기"
            fontSize="1.5"
            width="10rem"
            height="2.5rem"
            type="submit"
            marginTop="0rem"
          />
        </HospitalListRow>
      </HospitalListSearchBox>
      <MapBox id="map" />

      <Slider {...settings} style={{ width: "95%" }}>
        {result.map((hospital, i) => (
          <Card key={result[i].hospital_id}>
            <h1>{result[i].hospital_name}</h1>
            <Text marginLeft="20" weight="500" size="25">
              {result[i].phone !== "" ? (
                result[i].phone
              ) : (
                <span style={{ color: `${palette.gray}` }}>
                  데이터가 없습니다.
                </span>
              )}
            </Text>
            <Text marginLeft="20" weight="500" size="25">
              {result[i].address}
            </Text>
          </Card>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default Map;
