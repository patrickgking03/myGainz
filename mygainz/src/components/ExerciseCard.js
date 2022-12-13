export default function ExerciseCard({ exercise }) {
  return <div className="bg-gray-100 aspect-square p-4 rounded-lg">
    <p className="text-gray-500 font-sans capitalize font-medium truncate text-md">{exercise.name}</p>
    <p className="text-gray-400 font-sans capitalize font-regular truncate text-md">{exercise.equipment}</p>
    <p className="text-gray-400 font-sans capitalize font-regular truncate text-md mb-4">Target Muscle: <span className="text-red-600">{exercise.target}</span></p>
    <img src={exercise.gifUrl} alt="gif" className="rounded-lg bg-white border-2 border-slate-200 aspect-square w-full" />
  </div>;
}