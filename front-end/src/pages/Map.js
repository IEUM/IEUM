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

const MapBox = styled.div`
  width: 100%;
  height: 90vh;
`;

const { kakao } = window;

const Map = ({ location }) => {
  const where = location.state.where;
  const result = location.state.result;

  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    let map = new kakao.maps.Map(container, options);

    let markerPosition = new kakao.maps.LatLng(
      37.365264512305174,
      127.10676860117488
    );
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

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
    </Wrapper>
  );
};

export default Map;
