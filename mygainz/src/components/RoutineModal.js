import React from 'react';
import excercises from '../data/excercises.json';
import ExcerciseCard from './ExcerciseCard';
import { Slide } from "react-awesome-reveal";

const RoutineModal = ({ toggleModal, currentDay }) => {
  return (
    <div onClick={toggleModal} tabIndex="-1" className="z-50 p-12 absolute top-0 left-0 w-screen h-screen grid place-items-center bg-[rgba(0,0,0,0.5)]">
      <Slide direction="up" duration={750}>
        <div onClick={e => e.stopPropagation()} className="bg-white rounded-lg shadow max-w-6xl m-auto">
          <div className="flex items-start justify-between p-5 border-b rounded-t  ">
            <h3 className="text-xl font-semibold text-gray-900">
              Day {currentDay.index}: {currentDay.name}
            </h3>
            <button onClick={toggleModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 max-h-[600px] overflow-scroll overflow-x-hidden grid sm:grid-cols-2 lg:grid-cols-3 gap-4 scrollbar-hide justify-center">
            {currentDay.name == 'Rest' ? <h1>Enjoy your rest day!</h1> : currentDay.excercises.map(id => {
              const excercise = excercises.find(e => e.id == id);
              if (!excercise) return;
              return <ExcerciseCard key={id} excercise={excercise} />;
            })}
          </div>
          <div className="flex items-center p-5 space-x-2 border-t border-gray-200 rounded-b">
            <button onClick={toggleModal} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-nonefont-medium rounded-lg text-sm px-5 py-2.5 text-center">Save Routine</button>
            <button onClick={toggleModal} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Back</button>
          </div>
          {/* </div> */}
        </div>
      </Slide>
    </div>
  );
};

export default RoutineModal;
