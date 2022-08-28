import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import styles from "../styles/Dashboard.module.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const labels = ["January", "February", "March", "April", "May", "June", "July"];

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

  const data = {
    labels,
    datasets: [
      {
        label: "completed tasks",
        data: labels.map(() => faker.datatype.number({ min: 5, max: 10 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Total tasks",
        data: labels.map(() => faker.datatype.number({ min: 10, max: 20 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Bar className={styles.dashboard} options={options} data={data} />;
    </div>
  );
};
export default Dashboard;
