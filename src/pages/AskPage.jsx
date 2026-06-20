import { useState } from "react";

function AskPage({ onYes }) {
  const noTexts = [
    "No",
    "Think again 😌",
    "Wrong button!",
    "Not this one 😭",
    "Click Yes ❤️",
  ];

  const [escaped, setEscaped] = useState(false);
  const [noText, setNoText] = useState("No");
  const [noPosition, setNoPosition] = useState({ left: "50%", top: "50%" });

  const moveNoButton = () => {
    setEscaped(true);

    const x = Math.random() * 70 + 10;
    const y = Math.random() * 55 + 35;

    setNoPosition({
      left: `${x}%`,
      top: `${y}%`,
    });

    setNoText(noTexts[Math.floor(Math.random() * noTexts.length)]);
  };

  return (
    <div className="page">
      <div className="card ask-card">
        <h1>Will you go out with me?</h1>
        <div className="emoji">🥺</div>
        <p>For bowling and dinner?</p>

        <div className="button-group">
          <button className="yes-btn" onClick={onYes}>
            Yes ❤️
          </button>

          <button
            className={`no-btn ${escaped ? "escaped" : ""}`}
            style={escaped ? noPosition : {}}
            onMouseEnter={moveNoButton}
            onMouseMove={moveNoButton}
            onClick={moveNoButton}
          >
            {noText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AskPage;