"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [backendStatus, setBackendStatus] = useState<string>("Checking...");

  useEffect(() => {
    // Fetch from FastAPI backend
    fetch("http://localhost:8000/api/ping")
      .then((res) => res.json())
      .then((data) => {
        setBackendStatus(data.message || "Connected!");
      })
      .catch((err) => {
        console.error(err);
        setBackendStatus("Failed to connect");
      });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-zinc-950 text-white p-8 md:p-24 font-sans">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-zinc-800 bg-zinc-950/80 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4 shadow-lg">
          Personal Tasks & Dashboard
        </p>
      </div>

      <div className="relative flex flex-col place-items-center mt-20 gap-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 text-transparent bg-clip-text text-center pb-2">
          Welcome to Your Hub
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl text-center leading-relaxed">
          The starting point for your personalized system: Tasks, Itinerary, Diary, Accounting, and Language Learning.
        </p>
        
        <div className="mt-8 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-2xl backdrop-blur-sm transition-all hover:border-zinc-700">
          <div className="flex items-center gap-4">
            <div 
              className={`w-3 h-3 rounded-full ${
                backendStatus.includes('Failed') ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 
                backendStatus === 'Checking...' ? 'bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]' : 
                'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]'
              }`} 
            />
            <span className="font-mono text-zinc-300">Backend Status: <span className="font-bold text-white">{backendStatus}</span></span>
          </div>
        </div>
      </div>
      
      <div className="mt-24 mb-12 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-4">
        {[
          { name: 'Tasks', desc: 'Manage your daily to-dos' },
          { name: 'Diary', desc: 'Record your daily thoughts' },
          { name: 'Itinerary', desc: 'Plan your trips & schedules' },
          { name: 'Accounting', desc: 'Track your expenses' }
        ].map((module) => (
          <div key={module.name} className="group rounded-xl border border-transparent px-5 py-4 transition-colors hover:border-zinc-800 hover:bg-zinc-900/40 cursor-pointer">
            <h2 className="mb-3 text-2xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
              {module.name} <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-indigo-400">-&gt;</span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
              {module.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
