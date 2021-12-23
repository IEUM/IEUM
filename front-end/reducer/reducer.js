// 액션 타입 정의
const SET_WHERE = "SET_WHERE";
const SET_LOCATION_RESULT = "SET_LOCATION_RESULT";

//액션 생성함수
export const setWhere = () => ({
  type: SET_WHERE,
});
export const setLocationResult = () => ({
  type: SET_LOCATION_RESULT,
  hospital_id: 0,
});
