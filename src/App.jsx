import { useState } from "react";
import AskPage from "./pages/AskPage";
import PlanPage from "./pages/PlanPage";
import CelebrationPage from "./pages/CelebrationPage";
import "./App.css";

function App() {
  const [page, setPage] = useState("ask");
  const [dateDetails, setDateDetails] = useState({
    time: "",
    place: "",
  });

  return (
    <>
      {page === "ask" && <AskPage onYes={() => setPage("plan")} />}

      {page === "plan" && (
        <PlanPage
          dateDetails={dateDetails}
          setDateDetails={setDateDetails}
          onConfirm={() => setPage("celebration")}
        />
      )}

      {page === "celebration" && (
        <CelebrationPage dateDetails={dateDetails} />
      )}
    </>
  );
}

export default App;