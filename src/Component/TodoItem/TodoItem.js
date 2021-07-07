import React  from 'react';
import { connect } from 'react-redux';
import { mapDispatch_ToProps } from '../TodoSetting/Todo'
import ModalForm from '../TodoItem/Todo_Modal';
import { Button } from 'react-bootstrap';
import './TodoItem.css'

const TodoItem = ({ Task, handelComplete = () => {} , handelDelete = () => {} }) => {

  return (
    <ul className="list-container"> 
      <p style={{ textDecoration: Task.isDone ? 'line-through red' : 'none'}} className="Task-description">
        {Task.description}
      </p>
      <li className="list-items">
        <Button 
        variant={Task.isDone ? 'danger' : 'success'} 
        className='List-Btn' 
        onClick={() => handelComplete(Task.id)}
        style={{fontFamily: "Lucida Handwriting" }}
        >
          {Task.isDone ? 'Undo' : 'Done'}
        </Button>
        <ModalForm Task={Task} />
        <Button 
        className='List-Btn' 
        variant="danger"
        onClick={() => handelDelete(Task.id)}
        style={{fontFamily: "Lucida Handwriting" }}
        >
          Delete
        </Button>
      </li>
    </ul>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatch_ToProps)(TodoItem);
