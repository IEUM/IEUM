import React from "react";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction || "row"};
  background-color: #1f2933;
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  color: ${(props) => props.color || "white"};
  filter: ${(props) => props.blur || "blur(0)"};
  height: ${(props) => props.height || "15rem"};
`;

const Card = styled.div``;

const HospitalList = ({ Find, hospitals, data, hospitalList }) => {
  return (
    <>
      {/* <Menu direction="column">
        {data.map((hospital, i) => (
          <Card key={data[i].hospital_id}>
            <h1>{data[i].hospital_name}</h1>
          </Card>
        ))}
      </Menu> */}
    </>
  );
};

export default HospitalList;
