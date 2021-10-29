import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import Text from "../components/Text";

import Button from "../components/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = () => {
  return (
    <Wrapper>
      <LogoBox>
        <img style={{ width: "350px" }} src={Logo} alt="로고" />
      </LogoBox>
      <Text marginLeft="22">이음 耳音</Text>
      <ButtonBox>
        <Button
          name="의료기관 찾기"
          width="20rem"
          height="10rem"
          color="#1F2933"
          type="submit"
          marginTop="5rem"
        />
        <Button
          name="의약품 찾기"
          width="20rem"
          height="10rem"
          color="#1F2933"
          type="submit"
          marginTop="4rem"
        />
      </ButtonBox>
    </Wrapper>
  );
};

export default Main;
