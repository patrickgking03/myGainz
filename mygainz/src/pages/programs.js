import Routine from "../components/Routine.js";
import routines from "../data/routines.json";

export default function Programs() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <h1 className="page-header">Programs</h1>
      <Routine routine={routines[0]} />
      <Routine routine={routines[1]} />
      <Routine routine={routines[2]} />
    </div>
  );
}
