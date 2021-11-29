import React from "react";
import "../css/Modal.css";
import styled from "styled-components";

import Text from "../components/Text";
import Button from "../components/Button";

import ArrowBack from "../assets/arrow_back.png";
import Location from "../assets/location.png";

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 2rem;
`;

const LocationBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-left: 0.5rem;
`;

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, submitAddress } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            <Row>
              <LocationBox>
                <Image src={Location} />
                <Text marginRight="3">______</Text>
                <Image
                  src={ArrowBack}
                  style={{ transform: "rotate(180deg)" }}
                />
              </LocationBox>
              <Button
                name="설정 완료"
                width="10rem"
                height="3rem"
                color="#1F2933"
                type="submit"
                fontSize="28px"
                onClick={submitAddress}
              />
            </Row>
          </header>
          <main>{props.children}</main>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
