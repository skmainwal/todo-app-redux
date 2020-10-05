const initialState = {
  todos: [
    { id: 1, todo: "buy a milk" },
    { id: 2, todo: "Let's goto to school" },
    { id: 3, todo: "Let's build a todo app" },
    {
      id: 4,
      todo: "keep going ",
    },
  ],
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case "DELETE_TODO":
      let todos = state.todos.filter((todo) => {
        return action.payload !== todo.id;
      });
      return {
        ...state,
        todos: todos,
      };

    default:
      return state;
  }
};

export default myReducer;
