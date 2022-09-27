import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "todo/CHANGE_INPUT";
const ADD = "todo/ADD";
const TOGGLE = "todo/TOGGLE";
const REMOVE = "todo/REMOVE";

// default id 값
let id = 3;

export const add = createAction(ADD, (text) => ({
  id: id++,
  text,
  done: false,
}));

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

export const toggle = createAction(TOGGLE, (id) => id);

export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true,
    },
    {
      id: 2,
      text: "리액트와 리덕스 사용하기",
      done: false,
    },
  ],
};

const todo = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    [ADD]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
  },
  initialState
);

export default todo;
