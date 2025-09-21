import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { getUser } from "./services/githubApi";

const App = () => {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    try {
      const data = await getUser(username);
      setUser(data);
    } catch (err) {
      setUser(null);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <UserCard user={user} />
    </div>
  );
};

export default App;
