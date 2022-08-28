import { useEffect, useRef, useState } from "react";
// import { api } from "../http";
import styles from "../styles/List.module.css";
import axios from "axios";

const List = ({ date: datee }) => {
  const taskInput = useRef();
  const [tasks, setTasks] = useState([]);

  console.log(datee);

  const today = new Date().toJSON().slice(0, 10).split("-").reverse().join("/");
  let date = today.replaceAll("/", "-");
  if (datee) {
    date = datee;
  }

  const addTaskHandler = async () => {
    const data = await axios({
      method: "post",
      url: "/api/task/",
      data: {
        task: taskInput.current.value,
        date,
        completed: false,
      },
    });
    setTasks([...tasks, { task: taskInput.current.value, completed: false }]);
    taskInput.current.value = "";
  };

  const completeHandler = async (i, id) => {
    const data = await axios({
      method: "PUT",
      url: "/api/task/",
      data: {
        id,
        completed: true,
      },
    });
    console.log(data);
    tasks[i].completed = true;
    setTasks([...tasks]);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const resp = await axios({
        method: "post",
        url: "/api/task/date",
        data: {
          date,
        },
      });
      const { data } = resp;
      setTasks(data);
    };

    fetchTasks();
  }, [date]);

  return (
    <div className={styles.listContainer}>
      <div className={styles.header}>What's the plan for today?</div>
      <div className={styles.addTask}>
        <input className={styles.input} ref={taskInput}></input>
        <div className={styles.addTaskBtn} onClick={addTaskHandler}>
          Add a task
        </div>
      </div>
      <div className={styles.tasks}>
        {tasks.map((t, i) => (
          <div key={t.task} className={styles.task}>
            <div className={t.completed ? `${styles.completed}` : ""}>{t.task}</div>
            <div
              className={styles.checkbox}
              onClick={() => {
                completeHandler(i, t._id);
              }}
            >
              {t.completed ? "✔" : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default List;
