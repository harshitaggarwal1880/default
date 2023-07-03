import React from "react";
import axios from "axios";

const App = () => {
  const handleclick = async () => {
    const { data } = await axios.post(`${process.env.REACT_APP_HOST}/cookie`, { name:"HElli"},{
      headers: {"Content-Type": "application/json"},
      withCredentials: true,
    });

    console.log(data);
  };
  const handleclickk = async () => {
    const { data } = await axios.post(`${process.env.REACT_APP_HOST}/cokie`, { name:"HElli"},{
      headers: {"Content-Type": "application/json"},
      withCredentials: true,
    });

    console.log(data);
  };

  return (
    <div>
      <button onClick={handleclick}>Click</button>
      <button onClick={handleclickk}>Click</button>
    </div>
  );
};

export default App;
