import React, { useState } from "react";
import "App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "components/Button";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "첫번째 제목", content: "첫번째 내용", isDone: false },
  ]);
  //isDone이 true면 isDone
  //isDone이 false면 working

  // title,content state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //handler
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };
  //추가버튼
  const clickAddButtonHandler = () => {
    const newTodos = {
      id: todos.length + 1,
      title: title,
      content: content,
      isDone: false,
    };
    //입력 안하면 alert값띄우기, input 초기화
    if (title === "" || content === "") alert("입력하세요");
    else setTodos([...todos, newTodos]);

    //배열에 더하기
    //setTodos([...todos, newTodos]);
    //input 초기화
    // setTitle("");
    // setContent("");
  };

  //필터를 이용해서 완료 또는 취소 거르기
  //isDone == true 완료버튼 나오기 조건에 해당되는 것만
  //isDone == false 취소버튼 나오게
  const dones = todos.filter((todo) => todo.isDone);
  const workings = todos.filter((todo) => !todo.isDone);

  // 완료하기,취소버튼
  // 완료하기 버튼을 누르면 isDone이 true로 바껴야 함
  const checkTodo = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  //삭제하기
  const clickRemoveButtonHandler = (id) => {
    //필터링하여 useState에 넣어주기
    const TodoList = todos.filter((item) => item.id !== id);
    setTodos(TodoList);
  };

  return (
    <div className="containerBox col-10 col-lg-6 mx-auto mt-5 p-2">
      <div className="d-flex justify-content-between p-3">
        <p>My Todo List</p>
        <p>React</p>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex mx-2">
          <p>
            제목 :&nbsp;
            <input value={title} onChange={titleChangeHandler} type="text" />
          </p>
          <p className="ms-2">
            내용 : &nbsp;
            <input
              value={content}
              onChange={contentChangeHandler}
              type="text"
            />
          </p>
        </div>
        <div className="me-1">
          <Button css="btn btn-success" onButtonClick={clickAddButtonHandler}>
            추가
          </Button>
        </div>
      </div>
      {/* WORKING */}
      <h3>working...</h3>
      <div className="d-flex">
        {workings.map(function (item) {
          return (
            <div key={item.id} className="p-1">
              <div className=" border border-secondary p-2">
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.content}</p>
                </div>
                <div>
                  <Button
                    css="btn btn-outline-danger me-2"
                    onButtonClick={() => clickRemoveButtonHandler(item.id)}
                  >
                    삭제
                  </Button>

                  <Button
                    css="btn btn-outline-success"
                    onButtonClick={() => checkTodo(item.id)}
                  >
                    완료
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* ISDONE */}
      <h3>is Done...</h3>
      <div className="d-flex">
        {dones.map(function (item) {
          return (
            <div key={item.isDone} className="p-1">
              <div className="border border-secondary p-2">
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.content}</p>
                </div>
                <div>
                  <Button
                    css="btn btn-outline-danger me-2"
                    onButtonClick={() => clickRemoveButtonHandler(item.id)}
                  >
                    삭제
                  </Button>
                  <Button
                    css="btn btn-outline-success"
                    onButtonClick={() => checkTodo(item.id)}
                  >
                    취소
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
