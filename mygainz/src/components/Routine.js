export default function Routine({ routine }) {
  return (
    <div class=" md:w-full bg-gray-100 p-4 rounded-lg">
      <p class="text-gray-900 font-sans capitalize font-medium truncate text-md"></p>
      <p class="text-gray-400 font-sans capitalize font-regular truncate text-md"></p>
      {routine.name}
      <div className="flex-wrap py-8 px-6 flex flex text-center items-center w-full gap-6">
        <button class="rounded-md text-white bg-orange-400 py-5 px-6">
          {" "}
          Day 1: <br></br> {routine.day1}{" "}
        </button>
        <button class="rounded-md text-white bg-orange-400 py-5 px-6">
          {" "}
          Day 2: <br></br>
          {routine.day2}{" "}
        </button>
        <button class="rounded-md text-white bg-orange-400 py-5 px-6">
          {" "}
          Day 3: <br></br>
          {routine.day3}{" "}
        </button>
        <button class="rounded-md text-white bg-orange-400 py-5 px-6">
          {" "}
          Day 4: <br></br>
          {routine.day4}{" "}
        </button>
        <button class="rounded-md text-white bg-orange-400 py-5 px-6">
          {" "}
          Day 5: <br></br>
          {routine.day5}{" "}
        </button>
        <button class="rounded-md text-white bg-orange-400 py-5 px-6">
          {" "}
          Day 6: <br></br>
          {routine.day6}{" "}
        </button>
        <button class="rounded-md text-white bg-orange-400 py-5 px-6">
          {" "}
          Day 7: <br></br>
          {routine.day7}{" "}
        </button>
      </div>
      <p class="text-gray-400 font-sans capitalize font-regular truncate text-md mb-4"></p>
    </div>
  );
}
