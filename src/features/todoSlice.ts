import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  name: string;
  ifChecked: boolean;
  id: number;
}[];

type todo = {
  name: string;
  ifChecked: boolean;
  id: number;
};

const initialState: initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<todo>) => {
      state.push(action.payload);
    },
    del: (state, action: PayloadAction<string>) => {
      const name = state.map((e) => e.name);
      const index = name.indexOf(action.payload);
      index === 0 && state.length >= 1
        ? state.splice(index, index + 1)
        : state.splice(index, index);
    },
    multipledel: (state) => {
      const unChecked = state.filter((todo) => {
        return todo.ifChecked !== true;
      });
      state = JSON.parse(JSON.stringify(unChecked));
      console.log(state)
    },
    update: (
      state,
      action: PayloadAction<{ name: string; checked: boolean }>
    ) => {
      const name = action.payload.name;
      state.map((e) => {
        if (name === e.name) {
          return (e.ifChecked = action.payload.checked);
        }
      });
    },
  },
});

export default todoSlice.reducer;
export const { add, del, multipledel, update, } =
  todoSlice.actions;
