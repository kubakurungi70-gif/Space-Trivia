import React, { useState } from 'react';
import { Users, Play, Plus, Trash2, Lock, Copy, Check } from 'lucide-react';

export default function SpaceQuizGame() {
  const [gameState, setGameState] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-6xl font-bold mb-4">SPACE TRIVIA</h1>
        <p className="text-xl text-blue-200">Coming Soon...</p>
      </div>
    </div>
  );
}