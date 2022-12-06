import Routine from "../components/Routine.js";
import routines from "../data/routines.json";

export default function Programs() {
  return (
    <>
      {" "}
      <h1 className="page-header">Programs</h1>
      <br></br>
      <Routine routine={routines[0]} />
      <Routine routine={routines[1]} />
    </>
  );
}
