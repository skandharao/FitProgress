function ProgressCard({ title, value, unit }) {
  return (
    <div className="card stat-card">
      <h3>{title}</h3>

      <p className="stat-value">
        {value} {unit}
      </p>
    </div>
  );
}

export default ProgressCard;