import { useState } from "react";
import { FaPlus, FaCheck } from "react-icons/fa";
import {
  MdOutlineDeleteOutline as DeleteIcon,
  MdEdit as EditIcon,
} from "react-icons/md";
import "./todolist.css";

const TodoList = () => {
  const [task, setTask] = useState(""); // stores user input
  const [taskLists, setTaskList] = useState([]); // stores tasks
  const [editTask, setEditTask] = useState(null);

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
  const onEdit = (taskinfo, index) => {
    taskinfo.index = index;
    setEditTask(taskinfo);
    setTask(taskinfo.task); // setting input value
  };
  const onUpdate = () => {
    const currEditTask = editTask; // editTask has id and index

    currEditTask.task = task; // assign updated user input

    const position = currEditTask.index; // position of editing item
    setTaskList((currList) => {
      currList[position] = currEditTask; // updating item on its position
      return currList; // return updated list in state
    });

    setEditTask(null); //  reset editmode
    setTask(""); // reset user input
  };

  const isEmpty = taskLists.length === 0; // check if no task available
  const isEditMode = editTask !== null;
  return (
    <div className="todolist_wrapper">
      <div className="todolist_input_box">
        <input
          value={task}
          onChange={onInput}
          placeholder="Enter task here..."
        />
        {!isEditMode && (
          <button disabled={task.length < 3} onClick={onAdd}>
            Add <FaPlus />
          </button>
        )}
        {isEditMode && (
          <button disabled={task.length < 3} onClick={onUpdate}>
            Update <FaCheck />
          </button>
        )}
      </div>
      <div className="todolist_items">
        {isEmpty && <h2 className="task_list_empty">No task Available</h2>}
        {!isEmpty &&
          taskLists.map((item, index) => (
            <div className="task_item" key={item.id}>
              <p className="task_text">{item.task}</p>
              <div className="task_actions">
                <button
                  disabled={isEditMode}
                  onClick={() => onDlt(item.id)}
                  className="task_action task_delete"
                >
                  <DeleteIcon />
                </button>
                <button
                  disabled={isEditMode}
                  onClick={() => onEdit(item, index)}
                  className="task_action task_edit"
                >
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
