import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";

function App() {
  const [gainedData, setGainedData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [lostData, setLostData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <div style={{ width: 500 }}>
        <BarChart chartData={gainedData} />
      </div>
      <div style={{ width: 500 }}>
        <LineChart chartData={lostData} />
      </div>
      <div style={{ width: 500 }}>
        <PieChart chartData={gainedData} />
      </div>
    </div>
  );
}

export default App;
