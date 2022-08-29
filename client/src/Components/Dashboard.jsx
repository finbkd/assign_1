import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import styles from "../styles/Dashboard.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios({
        method: "get",
        url: "/api/task/fetch?year=2022",
      });
      const { dataMonth } = data;
      // console.log(dataMonth);
      setTasks(dataMonth);
    };

    fetchTasks();
  }, []);

  const labels = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sept", "Oct", "Nov", "Dec"];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "completed tasks",
  //       data: labels.map(() => faker.datatype.number({ min: 5, max: 10 })),
  //       backgroundColor: "rgba(255, 99, 132, 0.5)",
  //     },
  //     {
  //       label: "Total tasks",
  //       data: labels.map(() => faker.datatype.number({ min: 10, max: 20 })),
  //       backgroundColor: "rgba(53, 162, 235, 0.5)",
  //     },
  //   ],
  // };

  const data = {
    labels,
    datasets: [
      {
        label: "completed tasks",
        data: tasks.map((t) => t.noOfCompletedTasks),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Total tasks",

        data: tasks.map((t) => t.noofAllTasks),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Bar className={styles.dashboard} options={options} data={data} />
    </div>
  );
};
export default Dashboard;
