import Counter from "../../components/counter";
import Header from "../../components/header";
import StopWatchBox from "../../components/stopWatch";
import TodoList from "../../components/todolist";
import UserCard from "../../components/userCard";
import { USERS } from "../../data/userdata";

const PracticePage = () => {
  return (
    <div>
      <Header />
      <h1>React App</h1>
      {USERS.map((item, index) => (
        <UserCard key={index} userData={item} />
      ))}
      <Counter />
      <TodoList />
      <StopWatchBox />
    </div>
  );
};
export default PracticePage;
