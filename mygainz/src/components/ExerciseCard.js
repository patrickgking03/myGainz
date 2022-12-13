export default function ExerciseCard({ exercise, inputs }) {
  return <div className="bg-gray-100 aspect-square p-4 rounded-lg flex flex-col gap-y-4">
    <div>
      <p className="text-gray-500 font-sans capitalize font-medium truncate text-md">{exercise.name}</p>
      <p className="text-gray-400 font-sans capitalize font-regular truncate text-md">{exercise.equipment}</p>
      <p className="text-gray-400 font-sans capitalize font-regular truncate text-md">Target Muscle: <span className="text-red-600">{exercise.target}</span></p>
    </div>
    {inputs &&
      <div className="flex gap-4">
        <input placeholder="Sets" className="rounded-md border-2 border-slate-200 focus:outline-none p-2 text-gray-500 w-full" />
        <input placeholder="Reps" className="rounded-md border-2 border-slate-200 focus:outline-none p-2 text-gray-500 w-full" />
        <input placeholder="Weight" className="rounded-md border-2 border-slate-200 focus:outline-none p-2 text-gray-500 w-full" />
      </div>
    }
    <img src={exercise.gifUrl} alt="gif" className="rounded-lg bg-white border-2 border-slate-200 aspect-square w-full" />
  </div>;
}