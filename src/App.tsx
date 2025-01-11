import React, { useState } from 'react';

interface Team {
  name: string;
  points: number;
  logo: string;
}

function App() {
  const [teams] = useState<Team[]>([
    { name: 'Delhi Region', points: Math.floor(Math.random() * 1000), logo: './delhi.png' },
    { name: 'Bengaluru Region', points: Math.floor(Math.random() * 1000), logo: './bengaluru.png' },
    { name: 'Chandigarh Region', points: Math.floor(Math.random() * 1000), logo: './chandigarh.png' },
    { name: 'Lucknow Region', points: Math.floor(Math.random() * 1000), logo: './lucknow.png' },
    { name: 'Chennai Region', points: Math.floor(Math.random() * 1000), logo: './chennai.png' },
    { name: 'Mumbai Region', points: Math.floor(Math.random() * 1000), logo: './mumbai.png' },
    { name: 'Patna Region', points: Math.floor(Math.random() * 1000), logo: './bihar.png' },
    { name: 'Hyderabad Region', points: Math.floor(Math.random() * 1000), logo: './hyderabad.png' },
    { name: 'Kolkata Region', points: Math.floor(Math.random() * 1000), logo: './kolkata.png' },
  ].sort((a, b) => b.points - a.points));

  const POINTS_LIMIT = 1000;

  const getMedalColor = (index: number) => {
    switch(index) {
      case 0: return {
        text: 'text-amber-500',
        bg: 'bg-amber-500',
        number: 'text-amber-500'
      };
      case 1: return {
        text: 'text-gray-400',
        bg: 'bg-gray-400',
        number: 'text-gray-400'
      };
      case 2: return {
        text: 'text-amber-700',
        bg: 'bg-amber-700',
        number: 'text-amber-700'
      };
      default: return {
        text: 'text-gray-900',
        bg: 'bg-gray-900',
        number: 'text-gray-400'
      };
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <img src="public\logo_main.png" alt="logo" className="w-40 h-40 text-gray-900 mx-auto mb-6" />
          <h1 className="text-3xl font-light mb-8 tracking-tight">
            Kanha Inter-Region Competition
          </h1>
          <div className="inline-flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Current Stage</span>
            <div className="px-8 py-3 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-2xl border-2 border-gray-200 text-2xl font-medium text-gray-800 shadow-sm">
              Day 1
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {teams.map((team, index) => {
            const colors = getMedalColor(index);
            return (
              <div key={team.name} className="group relative">
                <div className="flex items-center gap-4 mb-2">
                  <span className={`text-lg font-medium w-6 ${colors.number}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className={`flex items-center gap-3`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${colors.bg} bg-opacity-10`}>
                      <img src={team.logo} alt={`${team.name} logo`} className="w-5 h-5" />
                    </div>
                    <span className={`text-base sm:text-lg font-medium ${colors.text}`}>
                      {team.name}
                    </span>
                  </div>
                  <span className={`ml-auto font-light text-base sm:text-lg tabular-nums ${colors.text}`}>
                    {team.points}
                  </span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full animate-bar ${colors.bg}`}
                    style={{
                      '--target-width': `${(team.points / POINTS_LIMIT) * 100}%`
                    } as React.CSSProperties}
                  />
                </div>
                <div className="team-tooltip absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap pointer-events-none hidden sm:block">
                  <div className="font-medium">Rank #{index + 1}</div>
                  <div className="text-gray-300">{team.points} points</div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;