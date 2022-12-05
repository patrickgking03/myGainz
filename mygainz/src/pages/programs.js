import Routine from "../components/Routine.js";
export default function Programs() {
  const PPL = {
    name: "PPL",
    day1: "Chest, Triceps, Shoulders",
    day2: "Back, Biceps",
    day3: "Legs",
    day4: "Chest, Triceps, Shoulders",
    day5: "Back, Biceps",
    day6: "Legs",
    day7: "Rest",
  };
  return (
    <>
      {" "}
      <h1 className="page-header">Programs</h1>
      <br></br>
      <Routine routine={PPL} />
    </>
  );
}
