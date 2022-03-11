import React, { useEffect, useState } from "react";
import Sportsusers from "./Sportsusers";

const FetchApi = () => {
  const [playerList, setPlayerList] = useState([]);
  const [input, setInput] = useState("");

  const searchHandler = (data) => {
    return data.filter(
      (values) =>
        values.TName.toLowerCase().includes(input) ||
        values.PFName.toLowerCase().includes(input)
    );
  };

  const getData = async () => {
    const result = await fetch("https://api.npoint.io/20c1afef1661881ddc9c");
    const data = await result.json();
    // console.log(data.playerList);
    data.playerList.sort((a, b) => {
      return Number(a.Value) - Number(b.Value);
    });
    setPlayerList(data.playerList);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="maindiv">
      <h1>List of sports players</h1>
      <div className="inputDiv">
        <input
          type="text"
          placeholder="Search Soprt player"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <Sportsusers playerList={searchHandler(playerList)} />
    </div>
  );
};

export default FetchApi;
