import { useState } from "react";

function AddProgress() {
  const [weight, setWeight] = useState("");
  const [steps, setSteps] = useState("");
  const [workout, setWorkout] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newProgress = {
      weight: Number(weight),
      steps: Number(steps),
      workout: workout,
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/progress",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProgress),
        }
      );

      if (response.ok) {
        setMessage("Progress added successfully!");

        setWeight("");
        setSteps("");
        setWorkout(false);
      }
    } catch (error) {
      console.log(error);
      setMessage("Something went wrong.");
    }
  };

  return (
    <div>
      <h1>Add Progress</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label>Weight (kg)</label>

        <input
          type="number"
          step="0.1"
          value={weight}
          onChange={(event) =>
            setWeight(event.target.value)
          }
          placeholder="Enter weight"
          required
        />

        <label>Steps</label>

        <input
          type="number"
          value={steps}
          onChange={(event) =>
            setSteps(event.target.value)
          }
          placeholder="Enter steps"
          required
        />

        <label className="checkbox">
          <input
            type="checkbox"
            checked={workout}
            onChange={(event) =>
              setWorkout(event.target.checked)
            }
          />

          Workout completed
        </label>

        <button type="submit">
          Save Progress
        </button>

        {message && <p className="success">{message}</p>}
      </form>
    </div>
  );
}

export default AddProgress;