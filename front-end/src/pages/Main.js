import React from "react";
import Button from "../components/Button";

const Main = () => {
  return (
    <div>
      이음 耳音
      <Button
        name="의료기관 찾기"
        width="20rem"
        height="10rem"
        color="#1F2933"
        type="submit"
      />
      <Button
        name="의약품 찾기"
        width="20rem"
        height="10rem"
        color="#1F2933"
        type="submit"
      />
    </div>
  );
};

export default Main;
