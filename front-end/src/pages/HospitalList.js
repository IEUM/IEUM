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

const Items = styled.div`
  width: ${(props) => props.width || "10rem"};
  font-size: 28px;

  &:hover {
    background-color: #f6f7fb;
    color: #1f2933;
    border-radius: 5px;
  }
`;

const HospitalList = ({ Find, hospitals, data }) => {
  return (
    <>
      {/* <Menu direction="column">
        {data.map((hospital, i) => (
          <Items key={data[i].hospital_id}>{data[i].hospital_name}</Items>
        ))}
      </Menu> */}
    </>
  );
};

export default HospitalList;
