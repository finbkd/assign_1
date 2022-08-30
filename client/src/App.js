import { useState } from "react";
import "./App.css";
import Dates from "./Components/Dates";
import Dashboard from "./Components/Dashboard";
import List from "./Components/List";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "../src/styles/Dates.module.css";
import DatePicker from "react-date-picker";
import dayjs from "dayjs";
import moment from "moment";

function App() {
  const [listmode, setListMode] = useState(true);

  const modeHandler = () => {
    setListMode(!listmode);
  };

  // const [value, onChange] = useState(new Date());
  const [value, onChange] = useState(new Date());
  const date = moment(new Date(value)).format("DD-MM-YYYY");
  console.log(date);

  return (
    <div className="App">
      <div className="switch" onClick={modeHandler}>
        Switch Mode?
      </div>
      {listmode ? (
        <div className={styles.dateContainer}>
          <Calendar className={styles.calendarr} onChange={onChange} allowPartialRange value={value} />
        </div>
      ) : (
        " "
      )}
      <div>
        <div>{listmode ? <List date={date} /> : <Dashboard />}</div>
      </div>
    </div>
  );
}

export default App;
