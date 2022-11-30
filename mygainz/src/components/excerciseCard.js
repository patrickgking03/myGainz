export default function ExcerciseCard({ excercise }) {
  return <div>
    <p className="text-gray-500 font-sans capitalize font-medium truncate text-md">{excercise.name}</p>
    <p className="text-gray-400 font-sans capitalize font-regular truncate text-md">{excercise.equipment}</p>
    <p className="text-gray-400 font-sans capitalize font-regular truncate text-md mb-4">Target Muscle: <span className="text-red-600">{excercise.target}</span></p>
    <img src={excercise.gifUrl} alt="gif" className="rounded-lg bg-white border-2 border-slate-200" />
  </div>;
}