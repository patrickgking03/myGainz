import Routine from "../components/Routine.js";
import routines from "../data/routines.json";

export default function Programs() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <h1 className="page-header">Programs</h1>
      <div className="overflow-scroll scrollbar-hide h-full space-y-6">
        {routines.map(routine => (
          <Routine key={routines.indexOf(routine)} routine={routine} />
        ))}
      </div>
    </div >
  );
}
