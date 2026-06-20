import { useEffect } from "react";
import confetti from "canvas-confetti";

function CelebrationPage({ dateDetails }) {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="page">
      <div className="card">
        <h1>It’s confirmed! 🎉❤️</h1>
        <p>I will pick you up then we will go for {dateDetails.place}.</p>

        <div className="details-box">
          <p>
            <strong>Time:</strong> {dateDetails.time}
          </p>
          <p>
            <strong>Plan:</strong> {dateDetails.place}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CelebrationPage;