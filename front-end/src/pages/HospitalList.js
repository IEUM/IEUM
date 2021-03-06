import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import Location from "../assets/location.png";
import ArrowBack from "../assets/arrow_back.png";
import palette from "../styles/palette";
import {
  Wrapper,
  Image,
  Menu,
  Items,
  ButtonBox,
  LocationBox,
  HospitalListSearchBox,
  HospitalListRow,
} from "./Presenter/Presenter";

import Button from "../components/Button";
import Text from "../components/Text";
import Modal from "../components/Modal";

import cities from "./data/cities";

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: ${(props) =>
    props.backgroundColor || `${palette.darkBlack}`};
  box-shadow: 0px 5px 10px ${palette.shadow};
  margin: 1rem 1rem 0rem 1rem;
  padding: 1rem 0.7rem 2rem 0.7rem;
  border-radius: 10px;
  color: ${(props) => props.color || "white"};
  min-height: ${(props) => props.height || "20rem"};
`;

const HospitalList = ({ location }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [where, setWhere] = useState("위치설정");
  const [result, setResult] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (location.state) {
      setWhere(location.state.where);
      setResult(location.state.result);
    }
  }, []);
  // const where = location.state.where;
  // const result = location.state.result;

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide);
    },
    afterChange: function (currentSlide) {
      //console.log("after change", currentSlide);
    },
  };

  return (
    <Wrapper alignItems="none">
      <LocationBox onClick={openModal}>
        <Image src={Location} />
        <Text marginRight="3">{where}</Text>
        <Image src={ArrowBack} />
      </LocationBox>
      <HospitalListSearchBox>
        <HospitalListRow>
          <Text size="24px">{result.length} 개의 결과</Text>
          <Link
            to={{
              pathname: `/map`,
              state: {
                result: result,
                where: where,
              },
            }}
          >
            <Button
              name="지도 보기"
              fontSize="1.5"
              width="10rem"
              height="2.5rem"
              type="submit"
              marginTop="0rem"
            />
          </Link>
        </HospitalListRow>
      </HospitalListSearchBox>

      <>
        <Slider {...settings} style={{ width: "95%" }}>
          {result.map((hospital, i) => (
            <Card key={result[i].hospital_id}>
              <h1>{result[i].hospital_name}</h1>
              <Text weight="500" size="25">
                전화번호
              </Text>
              <Text marginLeft="20" weight="500" size="25">
                {result[i].phone !== "" ? (
                  result[i].phone
                ) : (
                  <span style={{ color: `${palette.gray}` }}>
                    데이터가 없습니다.
                  </span>
                )}
              </Text>
              <Text weight="500" marginTop="10" size="25">
                주소
              </Text>
              <Text marginLeft="20" weight="500" size="25">
                {result[i].address}
              </Text>

              <ButtonBox alignItems="center">
                <Link
                  to={{
                    pathname: `/reviewList`,
                    state: {
                      result: result,
                      key: i,
                    },
                  }}
                >
                  <Button
                    name="후기 보러 가기"
                    fontSize="1.5"
                    width="15rem"
                    height="2.5rem"
                    type="submit"
                    marginTop="1.5rem"
                    // onClick={}
                  />
                </Link>
              </ButtonBox>
            </Card>
          ))}
        </Slider>
        <Modal open={modalOpen} close={closeModal} header="Modal heading">
          <Wrapper>
            <Menu>
              {cities.map((c) => (
                <Items width="5rem" key={c.id}>
                  {c.text}
                </Items>
              ))}
            </Menu>
            <Menu height="10rem"></Menu>
            <Menu height="10rem"></Menu>
          </Wrapper>
        </Modal>
      </>
    </Wrapper>
  );
};

export default HospitalList;
