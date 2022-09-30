import { createAction, handleActions } from "redux-actions";

const LISTPOST = "post/LISTPOST";
const READPOST = "post/READPOST";

export const listpost = createAction(LISTPOST);
export const readpost = createAction(READPOST);

// 참고 링크
// https://github.com/jmeno1011/learn-react-middleware/blob/master/src/modules/sample.js

const initialState = {
  userId: "",
  id: "",
  title: "",
  completed: false,
};

const post = handleActions(
  {
    [LISTPOST]: (state) => state,
  },
  initialState
);

export default post;
