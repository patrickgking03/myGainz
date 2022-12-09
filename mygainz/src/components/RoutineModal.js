import React from 'react';
import excercises from '../data/excercises.json';
import ExcerciseCard from './ExcerciseCard';

const RoutineModal = ({ toggleModal, currentDay }) => {
  console.log(currentDay);
  return (
    <div id="defaultModal" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex justify-center items-center overflow-x-hidden overflow-y-auto bg-[rgba(0,0,0,0.5)] md:inset-0 h-modal md:h-full">
      <div className="flex max-w-6xl h-full justify-center items-center md:h-auto m-8">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-start justify-between p-4 border-b rounded-t  ">
            <h3 className="text-xl font-semibold text-gray-900">
              Day: {currentDay.index} {currentDay.name}
            </h3>
            <button onClick={toggleModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 max-h-[600px] overflow-scroll overflow-x-hidden grid sm:grid-cols-2 lg:grid-cols-3 gap-4 scrollbar-hide justify-center">
            {currentDay.excercises.map(id => {
              console.log(id);
              const excercise = excercises.find(e => e.id == id);
              console.log(excercise);
              if (!excercise) return;
              return <ExcerciseCard key={id} excercise={excercise} />;
            })}
          </div>
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
            <button onClick={toggleModal} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Looks Good</button>
            <button onClick={toggleModal} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Other Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutineModal;
