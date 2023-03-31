import { MdClose, MdModeEdit, MdAdd } from "react-icons/md";
import {
  Container,
  BigText,
  AddTodoContainer,
  MoveLeft,
  MoveRight,
  TodoContainer,
  InputText,
  AddButton,
  Flex,
} from "./Style";
import "./Todo.css"

const Todo = () => {
  return (
    <div className="todo_container">
      <h1 className="todo_title">TodoList</h1>

      <section className="todo_first-section">
        <input type="search" placeholder="Click on the plus sign to add todo   ->"/>
        <button className="todo_add-button">
          <MdAdd />
        </button>
      </section>

      <section className="todo_second-section">
          <div className="flex_left">
            <input type="checkbox" />
            <label>some text</label>
          </div>

          <div className="flex_right">
            <MdModeEdit />
            <MdClose />
          </div>
      </section>

      <section className="todo_third-section">
        <div><strong>1</strong> of <strong>2</strong> task done</div>
        <button>Removed Checked <MdClose/></button>
      </section>
    </div>
  );
};

export default Todo;
