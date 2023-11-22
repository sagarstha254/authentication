import React, { useState } from "react";
import Signin from "./signin";

function Home() {
  const [value, setValue] = useState(false);

  const logout = () => {
    localStorage.clear();
    setValue(true);
  };

  return (
    <>

      {value ? <Signin /> : <button onClick={logout}>Log Out</button>}
    </>
  );
}

export default Home;
