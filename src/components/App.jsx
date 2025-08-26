import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import { avatar, location, stats, tag, username } from "../data/userData.json";
import "./App.css";
import FriendList from "./FriendList";
import Profile from "./Profile";
import TransactionHistory from "./TransactionHistory";

function App() {
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
