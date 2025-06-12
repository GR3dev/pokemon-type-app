'use client';
import React, { useEffect } from 'react';

// Main Function | Might need to split to components
function TypeButtonsGrid() {
  const typeNames = [
    'normal',
    'fire',
    'water',
    'electric',
    'grass',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dragon',
    'dark',
    'steel',
    'fairy',
  ];

  const typeChart = {
    normal: {
      superEffective: [],
      notVeryEffective: ['rock', 'steel'],
      noEffect: ['ghost'],
    },
    fire: {
      superEffective: ['grass', 'ice', 'bug', 'steel'],
      notVeryEffective: ['fire', 'water', 'rock', 'dragon'],
      noEffect: [],
    },
    water: {
      superEffective: ['fire', 'ground', 'rock'],
      notVeryEffective: ['water', 'grass', 'dragon'],
      noEffect: [],
    },
    electric: {
      superEffective: ['water', 'flying'],
      notVeryEffective: ['electric', 'grass', 'dragon'],
      noEffect: ['ground'],
    },
    grass: {
      superEffective: ['water', 'ground', 'rock'],
      notVeryEffective: ['fire', 'grass', 'poison', 'flying', 'bug', 'dragon', 'steel'],
      noEffect: [],
    },
    ice: {
      superEffective: ['grass', 'ground', 'flying', 'dragon'],
      notVeryEffective: ['fire', 'water', 'ice', 'steel'],
      noEffect: [],
    },
    fighting: {
      superEffective: ['normal', 'rock', 'steel', 'ice', 'dark'],
      notVeryEffective: ['poison', 'flying', 'psychic', 'bug', 'fairy'],
      noEffect: ['ghost'],
    },
    poison: {
      superEffective: ['grass', 'fairy'],
      notVeryEffective: ['poison', 'ground', 'rock', 'ghost'],
      noEffect: ['steel'],
    },
    ground: {
      superEffective: ['fire', 'electric', 'poison', 'rock', 'steel'],
      notVeryEffective: ['grass', 'bug'],
      noEffect: ['flying'],
    },
    flying: {
      superEffective: ['grass', 'fighting', 'bug'],
      notVeryEffective: ['electric', 'rock', 'steel'],
      noEffect: [],
    },
    psychic: {
      superEffective: ['fighting', 'poison'],
      notVeryEffective: ['psychic', 'steel'],
      noEffect: ['dark'],
    },
    bug: {
      superEffective: ['grass', 'psychic', 'dark'],
      notVeryEffective: ['fire', 'fighting', 'poison', 'flying', 'ghost', 'steel', 'fairy'],
      noEffect: [],
    },
    rock: {
      superEffective: ['fire', 'ice', 'flying', 'bug'],
      notVeryEffective: ['fighting', 'ground', 'steel'],
      noEffect: [],
    },
    ghost: {
      superEffective: ['psychic', 'ghost'],
      notVeryEffective: ['dark'],
      noEffect: ['normal'],
    },
    dragon: {
      superEffective: ['dragon'],
      notVeryEffective: ['steel'],
      noEffect: ['fairy'],
    },
    dark: {
      superEffective: ['psychic', 'ghost'],
      notVeryEffective: ['fighting', 'dark', 'fairy'],
      noEffect: [],
    },
    steel: {
      superEffective: ['ice', 'rock', 'fairy'],
      notVeryEffective: ['fire', 'water', 'electric', 'steel'],
      noEffect: [],
    },
    fairy: {
      superEffective: ['fighting', 'dragon', 'dark'],
      notVeryEffective: ['fire', 'poison', 'steel'],
      noEffect: [],
    },
  };

  const typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };

  const handleTypeClick = (type: string) => {
    console.log(`Clicked: ${type}`);
    // You can replace this with your actual click handler
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm px-4">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">Pokémon Type Game</h1>

        <div className="grid grid-cols-3 gap-2">
          {typeNames.map((type) => (
            <button
              key={type}
              onClick={() => handleTypeClick(type)}
              className="transform rounded-xl p-1 text-xs font-bold uppercase text-white shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: typeColors[type],
                boxShadow: `0 3px 8px ${typeColors[type]}30`,
              }}
            >
              {type}
            </button>
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">Select any type to answer</p>
      </div>
    </div>
  );
}

export default TypeButtonsGrid;
