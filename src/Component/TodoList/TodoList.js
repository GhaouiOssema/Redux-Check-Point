import React , {useState} from 'react';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css'
import { map_State_To_Props , map_Dispatch_To_Props} from '../TodoSetting/Todo'
import {Button} from 'react-bootstrap'

const TodoList = ({
  description = '',
  tasks = [],
  handleAddTodo = () => {},
  updateInput = () => {}
}) => {

  let id = tasks.length + 1;
  const [filter,setFilter] =useState(false)
  const [done,setDone]=useState(false)

  return (
    <>
    <div className='Container'>
      <div className='Input-Container'>
        <div className='add-element'>
          <h1 className="input-title">
            TO DO APP! <span>Add <span style={{color: "#f01" }}>New</span> Task</span>
          </h1>
          <div className="flex-field">
            <input
              type='text'
              id='myInput'
              placeholder='Enter New Task...'
              onChange={e => updateInput(e.target.value)}
              value={description}
            />
            <Button
              className='add-Btn'
              onClick={() => handleAddTodo({ id, description, isDone: false })}
              variant="dark"
            >
              Add
            </Button>
          </div>
        </div>
      </div>

      <div className="content"> 
      <h2> Compete Your Tasks Here !!!</h2>
      <div>
        <ul>
          <div className="Task-container">
            <div className="listTask">
                <Button 
                variant="outline-success" 
                onClick={()=>{setFilter(true);setDone(true)}}
                style={{fontFamily: "Lucida Handwriting" }}
                >
                   Show Done.
                </Button>
                <Button 
                variant="outline-danger" 
                onClick={()=>{setFilter(true);setDone(false)}} 
                style={{fontFamily: "Lucida Handwriting" }}
                > 
                Show Not Done
                </Button>
                <Button 
                 variant="dark" 
                 onClick={()=>setFilter(false)}
                 style={{fontFamily: "Lucida Handwriting" }}
                 >
                   Show All
                </Button>
            </div>
            {
              !filter ? tasks.map((el, i) => (<TodoItem Task={el} key={i} />)):
                done ? tasks.filter(tasks => tasks.isDone===true).map((el, i) => (<TodoItem Task={el} key={i}/>)):
                tasks.filter(tasks => tasks.isDone === false).map((el, i) => (<TodoItem Task={el} key={i}  />))
            }
          </div>
        </ul>
      </div>
      </div>
    </div>
    </>
  );
}

export default connect(map_State_To_Props, map_Dispatch_To_Props)(TodoList);