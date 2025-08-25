import Header from "./components/header";
import "./App.css";
import UserCard from "./components/userCard";
import * as Users from "./data/userdata";

const App = () => {
  return (
    <div>
      <Header />
      <h1>React App</h1>
      <UserCard userData={Users.user1} />
      <UserCard userData={Users.user2} />
      <UserCard userData={Users.user3} />
    </div>
  );
};
export default App;
