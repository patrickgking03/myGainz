export default function ExcerciseCard({ excercise }) {
  return <div>
    <p className="text-gray-500 font-mono capitalize font-medium truncate text-lg">{excercise.name}</p>
    <p className="text-gray-400 font-mono capitalize font-medium truncate text-lg">{excercise.equipment}</p>
    <p className="text-gray-400 font-mono capitalize font-medium truncate text-lg mb-4">Target Muscle: <span className="text-green-700">{excercise.target}</span></p>
    <img src={excercise.gifUrl} alt="gif" className="rounded-lg bg-white border-2 border-slate-200" />
  </div>;
}