import Routine from "../components/Routine.js";
import RoutineModal from "../components/RoutineModal.js";
import routines from "../data/routines.json";

import { useState } from 'react';

export default function Programs() {
  const [showModal, setShowModal] = useState(false);
  const [currentDay, setCurrentDay] = useState({});

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return <>
    <div className="flex h-full flex-col space-y-6">
      <div className="space-y-1">
        <h1 className="page-header">Programs</h1>
        <h2 className="page-header text-gray-500 text-lg">{routines.length} routines</h2>
      </div>

      <div className="overflow-scroll scrollbar-hide h-full space-y-6">
        {routines.map(routine => (
          <Routine setCurrentDay={setCurrentDay} key={routines.indexOf(routine)} toggleModal={toggleModal} routine={routine} />
        ))}
      </div>
    </div >
    {showModal && <RoutineModal className="modal" currentDay={currentDay} toggleModal={toggleModal} />}
  </>;
}
