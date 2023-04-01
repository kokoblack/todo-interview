import { MdClose, MdModeEdit, MdAdd } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { add, del, multipledel, update } from "../features/todoSlice";
import { useRef, useEffect } from "react";
import "./Todo.css";

const Todo = () => {
  
  const todo = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  console.log(todo);

  const done = todo.filter((e) => {
    return e.ifChecked === true;
  });
  const progress = (done.length / todo.length)

  const inputRef = useRef("");
  const progressRef = useRef<HTMLDivElement>(null)

  const addTodo = () => {
    const name = todo.map((e) => e.name);
    const checkName = name.includes(inputRef.current);
    if (!checkName) {
      dispatch(
        add({
          name: inputRef.current,
          ifChecked: false,
          id: 0,
        })
      );
    }
  };

  useEffect(() => {
    progressRef.current?.style.setProperty(
      "--progress",
      `${progress * 100}%`
    );
  }, [progress])
  

  return (
    <div className="todo_container">
      <h1 className="todo_title">TodoList</h1>

      <section className="todo_first-section">
        <input
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter") {
              {
                if (inputRef.current !== "") {
                  addTodo();
                }
              }
            }
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            inputRef.current =
              e.target.value.charAt(0).toUpperCase() +
              e.target.value.slice(1).toLowerCase();
          }}
          type="search"
          placeholder="Click on the plus sign to add todo"
        />
        <button
          onClick={() => {
            if (inputRef.current !== "") {
              addTodo();
            }
          }}
          className="todo_add-button"
        >
          <MdAdd />
        </button>
      </section>

      {todo.map((todos, id) => (
        <section key={todos.name} className="todo_second-section">
          <div className="flex_left">
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(
                  update({ name: todos.name, checked: e.target.checked })
                );
              }}
              type="checkbox"
            />
            <label>{todos.name}</label>
          </div>

          <div className="flex_right">
            <MdModeEdit />
            <MdClose onClick={() => dispatch(del(todos.name))} />
          </div>
        </section>
      ))}

      <section className="todo_third-section">
        <div ref={progressRef}>
          <strong>{done.length}</strong> of <strong>{todo.length}</strong> task done
        </div>
        <button
          onClick={() => {
            dispatch(multipledel());
          }}
        >
          Removed Checked <MdClose />
        </button>
      </section>
    </div>
  );
};

export default Todo;
