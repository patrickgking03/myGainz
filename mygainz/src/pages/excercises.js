import React, { useEffect } from 'react';
import { useState } from 'react';
import excerciseData from '../data/excercises.json';
import ExcerciseCard from '../components/ExcerciseCard';
import { RxDoubleArrowRight, RxDoubleArrowLeft } from 'react-icons/rx';
import { IoSearch } from 'react-icons/io5';

export default function Excercises() {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [excercises, setExcercises] = useState(excerciseData);

  const nextPage = () => {
    if (page === 165) return;
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page === 0) return;
    setPage(page - 1);
  };

  useEffect(() => {
    const waitForTyping = setTimeout(() => {
      setExcercises(excerciseData.filter(excercise => {
        const toCheck = `${excercise.name} ${excercise.equipment} ${excercise.target}`;
        return toCheck.toLowerCase().includes(search.toLowerCase());
      })); 
    }, 1000);

    return () => clearTimeout(waitForTyping);
  }, [search]);

  return (
    <div className="flex h-full flex-col space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="page-header">Excercises <span className="page-header text-gray-500">(Page {page + 1})</span></h1>
        <h2 className="page-header text-gray-400">{excercises.length} Results</h2>
      </div>
      <div className="h-16 flex justify-end items-center relative rounded-lg border-2 bg-gray-100 border-gray-200 px-4 focus:outline-blue-500">
          <input onChange={(e) => setSearch(e.target.value)} placeholder="Filter by name, muscle group, or equipment..." className="w-full h-full focus:outline-none text-gray-600 bg-gray-100" />
          <IoSearch className="fill-gray-400" />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 overflow-scroll scrollbar-hide h-full">
        {excercises.slice(page, page + 12).map(excercise => {
          return <ExcerciseCard key={excercise.id} excercise={excercise} />;
        })}
      </div>
      <div className="flex justify-between">
        <button className="btn-primary" onClick={prevPage}><RxDoubleArrowLeft />Prev</button>
        <button className="btn-primary lg:col-start-4" onClick={nextPage}>Next<RxDoubleArrowRight /></button>
      </div>
    </div>

  );
};