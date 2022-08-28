import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "../styles/Dates.module.css";

const Dates = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className={styles.dateContainer}>
      <Calendar className={styles.calendarr} onChange={onChange} allowPartialRange value={value} />
    </div>
  );
};
export default Dates;
