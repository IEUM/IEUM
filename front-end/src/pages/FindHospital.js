import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Location from "../assets/location.png";
import ArrowBack from "../assets/arrow_back.png";
import Search from "../assets/find.png";
import Filter from "../assets/filter.png";
import palette from "../styles/palette";
import {
  Wrapper,
  Image,
  Menu,
  Items,
  ButtonBox,
  LocationBox,
  SearchBox,
} from "./Presenter/Presenter";

import Text from "../components/Text";
import Button from "../components/Button";
import Modal from "../components/Modal";

import cities from "./data/cities";
import categories from "./data/categories";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 2rem;
`;

const Input = styled.input`
  color: white;
  outline: none;
  border: none;
  width: 70%;
  height: 2rem;
  padding-left: 1rem;
  margin-right: 1rem;
  background-color: ${palette.darkBlack};
  font-size: 20px;
`;

const FindHospital = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [where, setWhere] = useState("위치설정");
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setShow(!show);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  // input 키워드 보냄
  const submitKeyword = () => {
    setIsError(false);
    const fetchData = () => {
      try {
        const post = { keyword: keyword };

        fetch("http://localhost:3001/keyword", {
          method: "post", // 통신방법
          headers: {
            "content-type": "application/json",
          }, // API응답 정보 담기
          body: JSON.stringify(post), //전달 내용
        })
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            setResult(JSON.stringify(json));

            console.log(result);
          });
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
    };
    fetchData();
  };

  // const onCall = () => {
  //   //callbody
  //   fetch("http://localhost:3001/keyword", {
  //     method: "post",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       setResult(json.hospital_name);
  //       console.log(result);
  //     });
  // };

  // const Find = (hospitals) => {
  //   let data = hospitals.filter(
  //     (data) => data.hospital_name.indexOf(keyword) > -1
  //   );
  //   let hospitalList = [];
  //   data.map((hospital, i) => hospitalList.push(data[i].hospital_name));
  //   console.log(hospitalList);
  //   // data.map((hospital, i) => console.log(data[i].hospital_name));

  //   setWhere(data[0].dong + " 외" + hospitalList.length);
  //   setKeyword("");
  // };

  return (
    <Wrapper alignItems="none">
      <LocationBox onClick={openModal}>
        <Image src={Location} />
        <Text marginRight="3">{where}</Text>
        <Image src={ArrowBack} />
      </LocationBox>
      <SearchBox>
        <Row>
          <Input
            type="text"
            name="keyword"
            value={keyword}
            onChange={handleChange}
          />
          {/* 클릭시 색 바뀌도록 */}
          <Image src={Search} onClick={submitKeyword} />
        </Row>
        <div
          style={{
            borderTop: "2px solid white",
            width: "76%",
            paddingBottom: "1rem",
            marginRight: "1rem",
            marginLeft: "1rem",
          }}
        />
      </SearchBox>
      <LocationBox>
        <Image src={Filter} />
        <Text size="24">필터</Text>
      </LocationBox>
      {show ? (
        <Menu
          color="rgba(255, 255, 255, 0.1)"
          blur="blur(1.7px)"
          direction="column"
        >
          {categories.map((c) => (
            <Items key={c.id}>{c.text}</Items>
          ))}
        </Menu>
      ) : (
        <Menu direction="column">
          {categories.map((c) => (
            <Items key={c.id}>{c.text}</Items>
          ))}
        </Menu>
      )}
      <Link
        to={{
          pathname: `/hospitalList`,
          state: {
            where: where,
            result: result,
          },
        }}
      >
        <ButtonBox>
          <Button
            name="검색하기"
            width="20rem"
            height="5rem"
            color="#1F2933"
            type="submit"
            marginTop="8rem"
          />
        </ButtonBox>
      </Link>

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
    </Wrapper>
  );
};

export default FindHospital;
