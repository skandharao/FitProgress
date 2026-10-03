function GoalCard({ currentWeight, targetWeight }) {
  const startingWeight = 70;

  let progress =
    ((startingWeight - currentWeight) /
      (startingWeight - targetWeight)) *
    100;

  progress = Math.max(0, Math.min(100, progress));

  return (
    <div className="card">
      <h3>Goal Progress</h3>

      <p>
        Current Weight: <strong>{currentWeight} kg</strong>
      </p>

      <p>
        Target Weight: <strong>{targetWeight} kg</strong>
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <h2>{Math.round(progress)}%</h2>
    </div>
  );
}

export default GoalCard;