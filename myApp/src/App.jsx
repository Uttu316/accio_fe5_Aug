import Header from "./components/header";
import "./App.css";
import UserCard from "./components/userCard";
import * as Users from "./data/userdata";
import Counter from "./components/counter";
import TodoList from "./components/todolist";
import StopWatchBox from "./components/stopWatch";

const App = () => {
  return (
    <div>
      <Header />
      <h1>React App</h1>
      {Users.USERS.map((item, index) => (
        <UserCard key={index} userData={item} />
      ))}
      <Counter />
      <TodoList />
      <StopWatchBox />
    </div>
  );
};
export default App;
