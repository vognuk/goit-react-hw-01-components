import React from "react";
import Profile from "./components/Profile/";
import user from "./data/user";
import Statistics from "./components/Statistics/";
import stats from "./data/statistical-data";
import FriendList from "./components/FriendList/";
import friends from "./data/friends";
import TransactionHistory from "./components/TransactionHistory/";
import transactions from "./data/transactions";

export default function App() {
  const { followers, views, likes } = user.stats;
  let title = "Upload stats";
  return (
    <>
      <Profile
        name={user.name}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics stats={stats} title={title} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
