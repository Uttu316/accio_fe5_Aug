import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  MdOutlineDeleteOutline as DeleteIcon,
  MdEdit as EditIcon,
} from "react-icons/md";
import "./todolist.css";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [taskLists, setTaskList] = useState([]);
  const onInput = (e) => {
    const value = e.target.value;
    setTask(value); // store user input
  };
  const onAdd = () => {
    if (task.length < 3) return;
    setTaskList((tasks) => {
      const currTask = {
        task,
        id: parseInt(Math.random() * 10000), // random id for every task item
      };
      return [currTask, ...tasks]; // return new state of list by storing task object in begning of list
    });
    setTask(""); // reset task input
  };
  const onDlt = (id) => {
    const newitems = taskLists.filter((item) => item.id !== id);
    setTaskList(newitems);
  };

  const isEmpty = taskLists.length === 0; // check if no task available

  return (
    <div className="todolist_wrapper">
      <div className="todolist_input_box">
        <input
          value={task}
          onChange={onInput}
          placeholder="Enter task here..."
        />
        <button disabled={task.length < 3} onClick={onAdd}>
          Add <FaPlus />
        </button>
      </div>
      <div className="todolist_items">
        {isEmpty && <h2 className="task_list_empty">No task Available</h2>}
        {!isEmpty &&
          taskLists.map((item) => (
            <div className="task_item" key={item.id}>
              <p className="task_text">{item.task}</p>
              <div className="task_actions">
                <button
                  onClick={() => onDlt(item.id)}
                  className="task_action task_delete"
                >
                  <DeleteIcon />
                </button>
                <button className="task_action task_edit">
                  <EditIcon />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoList;
