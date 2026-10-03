import { useEffect, useState } from "react";

import WelcomeMessage from "../components/WelcomeMessage";
import ProgressCard from "../components/ProgressCard";
import GoalCard from "../components/GoalCard";

function Dashboard() {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/progress")
      .then((response) => response.json())
      .then((data) => setProgress(data))
      .catch((error) => console.log(error));
  }, []);

  const latest =
    progress.length > 0
      ? progress[progress.length - 1]
      : {
          weight: 65,
          steps: 10000,
          workout: false,
        };

  const workoutCount = progress.filter(
    (item) => item.workout
  ).length;

  return (
    <div>
      <WelcomeMessage />

      <h1>Dashboard</h1>

      <div className="stats">
        <ProgressCard
          title="Current Weight"
          value={latest.weight}
          unit="kg"
        />

        <ProgressCard
          title="Daily Steps"
          value={latest.steps}
          unit="steps"
        />

        <ProgressCard
          title="Workouts"
          value={workoutCount}
          unit="completed"
        />
      </div>

      <GoalCard
        currentWeight={Number(latest.weight)}
        targetWeight={62}
      />

      <div className="card">
        <h3>Weekly Summary</h3>

        <p>
          Latest weight: <strong>{latest.weight} kg</strong>
        </p>

        <p>
          Latest steps: <strong>{latest.steps}</strong>
        </p>

        <p>
          Workouts recorded: <strong>{workoutCount}</strong>
        </p>
      </div>
    </div>
  );
}

export default Dashboard;