import Routine from "../components/Routine.js";
import RoutineModal from "../components/RoutineModal.js";
import { useOutletContext } from "react-router-dom";
import { db } from "../services/firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import starterRoutines from "../data/routines.json";
import { BsPlusLg } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';
import { InitiateSignIn } from '../services/authService.js';

import { useEffect, useState } from 'react';

export default function Programs() {
  const user = useOutletContext();
  const [routines, setRoutines] = useState(starterRoutines);
  const [showModal, setShowModal] = useState(false);
  const [currentDay, setCurrentDay] = useState({});
  const [userRef, setUserRef] = useState();


  useEffect(() => {
    if (!user) return setRoutines(starterRoutines);
    (async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserRef(docRef);
        setRoutines(docSnap.data().programs);
      }
    })();
  }, [user]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return <>
    <div className="flex h-full flex-col space-y-6">
      <div className="flex w-full justify-between items-center">
        <div className="space-y-1">
          <h1 className="page-header">Programs</h1>
          <h2 className="page-header text-gray-500 text-lg font-medium">{(routines && routines[0]) ? routines.length : 0} routine(s)</h2>
        </div>
        {user ? <button className="btn-primary btn-animate font-sans h-12"><BsPlusLg />Add Routine</button> :
          <button onClick={InitiateSignIn} className="btn-primary btn-animate font-sans h-12"><MdAccountCircle size={25} />Sign In</button>}
      </div>
      {user && (!routines || routines.length < 1) ? <h1 className="text-medium text-gray-600">You have no routines, click to create your first routine</h1>
        : user ? <h1 className="text-medium text-gray-600">Click on a day to track your progress!</h1> : <h1 className="text-medium text-gray-600">Click above to sign in and track your progress! Here are some starter routines for now: </h1>}
      <div className="overflow-scroll scrollbar-hide h-full space-y-6">
        {routines && routines.map(routine => {
          const index = routines.indexOf(routine);
          return <Routine setRoutines={setRoutines} setCurrentDay={setCurrentDay} routines={routines} user={user} key={index} toggleModal={toggleModal} userRef={userRef} index={index} routine={routine} />;
        })}
      </div>
    </div>
    {showModal && <RoutineModal className="modal" currentDay={currentDay} toggleModal={toggleModal} />}
  </>;
}
