// HOOKS
import { useEffect, useState } from "react";
import { users } from "../../data/users";
import CardUser from "../CardUser/CardUser";
import "./Home.css";
import Counter from "../Counter/Counter";

function Home() {
  const [usersData, setUsersData] = useState(users);

  return (
    <>
      <Counter initialState={1} />
      {usersData.map((user, index) => (
        <CardUser key={index} user={user} />
      ))}
    </>
  );
}

export default Home;
