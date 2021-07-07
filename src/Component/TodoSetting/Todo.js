// Actions
import { Edit, setInput , addTodo , Delete , Complete} from '../../Redux/Actions/Actions';

// *************************************************

// ---------- Modal ----------
export const mapStateTProps = state => {
    return {
      description: state.description
    };
  };
  
export const mapDispatchToProps = dispatch => {
    return {
      updateInput: payload => dispatch(setInput(payload)),
      handleEdit: payload => dispatch(Edit(payload))
    };
};
// *************************************************

// *************************************************

// ---------- Todo List ----------
export const map_State_To_Props = state => {
    return {
      tasks: state.tasks,
      description : state.description
    };
};
export const map_Dispatch_To_Props = dispatch => {
    return {
      handleAddTodo: payload => dispatch(addTodo(payload)), // Task:obj
      updateInput: payload => dispatch(setInput(payload)) // text
    };
};  
// *************************************************

// *************************************************

// ---------- Todo Item ----------
export const mapDispatch_ToProps = dispatch => {
  return {
    handelDelete: payload => dispatch(Delete(payload)),
    handelComplete: payload => dispatch(Complete(payload)),
    handleEdit: payload => dispatch(Edit(payload))
  };
};
// *************************************************