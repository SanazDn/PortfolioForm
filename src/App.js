import React from "react";
import AddUser from "./components/AddUser";
import Footer from "./components/Footer";
import Profile from "./components/Profile";


function App() {

  async function onUserData(userData) {
    const response = await fetch(
      "https://http-portfolio-b2730-default-rtdb.firebaseio.com/userDatas.json",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <div>
      <Profile />
      <AddUser onUser={onUserData} />
      <Footer />
    </div>
  );
}

export default App;
