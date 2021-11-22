import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Location from "../assets/location.png";
import ArrowBack from "../assets/arrow_back.png";
import Search from "../assets/find.png";
import Filter from "../assets/filter.png";
import palette from "../styles/palette";

import Text from "../components/Text";
import Button from "../components/Button";
import Modal from "../components/Modal";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const LocationBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-left: 0.5rem;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${palette.darkBlack};
  padding-top: 1rem;
  margin-top: 1rem;
`;

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

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction || "row"};
  background-color: ${palette.darkBlack};
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  color: ${(props) => props.color || "white"};
  filter: ${(props) => props.blur || "blur(0)"};
  height: ${(props) => props.height || "15rem"};
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Items = styled.div`
  width: ${(props) => props.width || "10rem"};
  font-size: 28px;

  &:hover {
    background-color: ${palette.ivory};
    color: ${palette.darkBlack};
    border-radius: 5px;
  }
`;

const categories = [
  { id: 0, text: "전체" },
  { id: 1, text: "내과" },
  { id: 2, text: "의과" },
  { id: 3, text: "이비인후과" },
  { id: 4, text: "신경외과" },
  { id: 5, text: "정형외과" },
  { id: 6, text: "산부인과" },
  { id: 7, text: "성형외과" },
  { id: 8, text: "치과" },
  { id: 9, text: "동물병원" },
  { id: 10, text: "약국" },
];

const cities = [
  { id: 1, text: "서울", cityCode: "110000" },
  { id: 2, text: "경기", cityCode: "310000" },
  { id: 3, text: "인천", cityCode: "220000" },
  { id: 4, text: "강원", cityCode: "320000" },
  { id: 5, text: "대전", cityCode: "250000" },
  { id: 6, text: "세종", cityCode: "410000" },
  { id: 7, text: "충남", cityCode: "340000" },
  { id: 8, text: "충북", cityCode: "330000" },
  { id: 9, text: "부산", cityCode: "210000" },
  { id: 10, text: "울산", cityCode: "260000" },
  { id: 11, text: "경남", cityCode: "380000" },
  { id: 12, text: "경북", cityCode: "370000" },
  { id: 13, text: "대구", cityCode: "230000" },
  { id: 14, text: "광주", cityCode: "240000" },
  { id: 15, text: "전남", cityCode: "360000" },
  { id: 16, text: "전북", cityCode: "350000" },
  { id: 17, text: "제주", cityCode: "390000" },
];

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
    <Wrapper>
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
          <Image src={Search} onClick={submitKeyword} />
          {/* <button type="submit" onClick={submitKeyword} /> */}
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
