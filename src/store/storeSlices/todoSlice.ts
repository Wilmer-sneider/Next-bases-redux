import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  title: string;
  completado: boolean;
}

interface TaskState {
  task: Task[];
}

const initialState: TaskState = {
  task: [],
};

export const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ title: string }>) => {
      state.task.push({
        id: Date.now(),
        title: action.payload.title,
        completado: false,
      });
    },
    /*  removeTask: (state) => {},
    toggleTask: (state ) => {}, */
  },
});

export const { addTask } = todoSlice.actions;
export default todoSlice.reducer;
