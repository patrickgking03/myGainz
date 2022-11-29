import React from 'react';
import { useState } from 'react';
import excercises from '../data/excercises.json';
import { RxDoubleArrowRight, RxDoubleArrowLeft } from 'react-icons/rx';

export default function Excercises() {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page === 165) return;
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page === 0) return;
    setPage(page - 1);
  };

  return (
    <div className="flex flex-col gap-y-8">
      <h1 className="page-header">Excercises</h1>
      <div className="w-full grid place-items-center">
        <header className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-h-[calc(100vh-5rem)]">
          {excercises.slice(page, page + 8).map(excercise => {
            return <div key={excercise.id} className="space-y-4">
              <p className="text-gray-500 font-mono capitalize font-medium truncate text-lg">{excercise.name}</p>
              <img src={excercise.gifUrl} alt="gif" className="rounded-lg bg-white border-2 border-slate-200" />
            </div>;
          })}
          <button className="btn-primary" onClick={prevPage}><RxDoubleArrowLeft />Prev</button>
          <button className="btn-primary lg:col-start-4" onClick={nextPage}>Next<RxDoubleArrowRight /></button>
        </header>
      </div>
    </div>
  );
};