export default function Routine({ routine }) {
  return (
    <div class=" md:w-full bg-gray-100 p-8 rounded-lg border border-gray-200 scrollbar-hide space-y-6">
      <h2 className="text-xl text-gray-700 font-medium">{routine.name}</h2>
      <div className="flex flex-wrap text-center items-center w-full gap-6">
        {routine.days.map(day => (
          <button className="text-sm rounded-md flex-grow text-white bg-blue-500 p-4 hover:outline outline-2 outline-offset-1 outline-blue-500">
            Day {routine.days.indexOf(day) + 1}: {day.name}
          </button>
        ))}
      </div>
      <p class="text-gray-400 font-sans capitalize font-regular truncate text-md mb-4"></p>
    </div>
  );
}
