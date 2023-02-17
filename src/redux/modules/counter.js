// 일반 리덕스 예시 코드

import { createSlice } from "@reduxjs/toolkit";

// Action Value
// const ADD_NUMBER = "ADD_NUMBER";
// const MINUS_NUMBER = "MINUS_NUMBER";

// Action Creator

// export const addNumber = (payload) => {
//   return {
//     type: ADD_NUMBER,
//     payload,
//   };
// };

// export const minusNumber = (payload) => {
//   return {
//     type: MINUS_NUMBER,
//     payload,
//   };
// };

// Initial State
const initialState = {
  number: 0,
};

// Reducer

// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_NUMBER:
//       return {
//         number: state.number + action.payload,
//       };
//     // [퀴즈 답]
//     case MINUS_NUMBER:
//       return {
//         number: state.number - action.payload,
//       };
//     default:
//       return state;
//   }
// };

// CreateSlice 라는 API를 사용하도록 권장 했다.
// action creator와 reducer를 한번에 생성할 수 있게끔 해줌

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },

    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

// action creator는 컴포넌트에서 사용하기 위해 export 하고
export const { addNumber, minusNumber } = counterSlice.actions;

// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;
