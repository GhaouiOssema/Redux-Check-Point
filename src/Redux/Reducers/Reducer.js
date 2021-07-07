import { ADD_TODO , SET_TODO , DELETE_TODO , COMPLETE_TODO , UPDATE_TODO} from '../Constants/Actions-Type'

const Task = {
  description: "",
  isDone : false,
  tasks: []
};

// Reducer 

const reducer = (state = Task, action) => {
  switch (action.type) {

    // ADD 
    case ADD_TODO:
      return { ...state, tasks: state.tasks.concat(action.payload), description: "" };

    case SET_TODO:
      return { ...state, description: action.payload };

      // DELETE
    case DELETE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter((el, i) => el.id !== action.payload)
      };

      // COMPLETE
    case COMPLETE_TODO:
      return {
        ...state,
        tasks: state.tasks.map((el, i) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        )
      };

      // UPDATE
    case UPDATE_TODO:
      return {
        ...state,
        tasks: state.tasks.map((el, i) =>
          el.id === action.payload.id
            ? { ...el, description: action.payload.description, isDone: false }
            : el
        ),
        description: ""
      };

    default:
      return state;
  }
};

export default reducer;