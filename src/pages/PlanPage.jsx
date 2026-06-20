import song from "../assets/date-song.mp3";

function PlanPage({ dateDetails, setDateDetails, onConfirm }) {
  const times = ["6:00 PM", "7:00 PM", "8:00 PM"];
  const places = [
    "Bowling in Elante + Dinner in Gelatomoruccio",
    "JW Marriott Chandigarh + Walk",
    "Movie + Dinner",
    "Others",
  ];

  return (
    <div className="page">
      <audio src={song} autoPlay loop />

      <div className="card plan-card">
        <h1>Yayyy! Pick our plan</h1>

        <h3>Choose time</h3>
        <div className="option-grid">
          {times.map((time) => (
            <button
              key={time}
              className={`option-btn ${
                dateDetails.time === time ? "selected" : ""
              }`}
              onClick={() =>
                setDateDetails({ ...dateDetails, time })
              }
            >
              {time}
            </button>
          ))}
        </div>

        <h3>Choose place</h3>
        <div className="place-options">
          {places.map((place) => (
            <button
              key={place}
              className={`place-btn ${
                dateDetails.place === place ? "selected" : ""
              }`}
              onClick={() =>
                setDateDetails({ ...dateDetails, place })
              }
            >
              {place}
            </button>
          ))}
        </div>

        <button
          className="confirm-btn"
          disabled={!dateDetails.time || !dateDetails.place}
          onClick={onConfirm}
        >
          Confirm❤️
        </button>
      </div>
    </div>
  );
}

export default PlanPage;