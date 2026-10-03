import { useEffect, useState } from "react";

function History() {
  const [progress, setProgress] = useState([]);

  const loadProgress = () => {
    fetch("http://localhost:5000/api/progress")
      .then((response) => response.json())
      .then((data) => setProgress(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadProgress();
  }, []);

  const deleteProgress = async (id) => {
    await fetch(
      `http://localhost:5000/api/progress/${id}`,
      {
        method: "DELETE",
      }
    );

    loadProgress();
  };

  return (
    <div>
      <h1>Progress History</h1>

      {progress.length === 0 ? (
        <p>No progress recorded yet.</p>
      ) : (
        progress.map((item) => (
          <div className="history-card" key={item.id}>
            <div>
              <h3>{item.date}</h3>

              <p>
                Weight: {item.weight} kg
              </p>

              <p>
                Steps: {item.steps}
              </p>

              <p>
                Workout:{" "}
                {item.workout ? "Completed ✓" : "Not completed"}
              </p>
            </div>

            <button
              className="delete"
              onClick={() =>
                deleteProgress(item.id)
              }
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default History;