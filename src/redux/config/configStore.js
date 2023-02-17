import { configureStore } from "@reduxjs/toolkit";
import counter from "../modules/counter";

// ASIS : 일반 리듀서

// const rootReducer = combineReducers({
//   //이곳에 Modules 폴더에 넣어놓은 state의 묶음들을 넣을 예정
//   //즉, 리듀서
//   counter: counter,
// });
// const store = createStore(rootReducer);

//Redux Toolkit
//configureStore는 api이고 ()안에는 객체가 들어가게 된다

const store = configureStore({
  //객체 안에는 리듀서가 들어가야한다, 객체이기 때문에 key , value , 페어가 들어간다
  // reducer를 객체로 다시 한번 묶음
  reducer: {
    counter: counter,
  },
});

export default store;
