"use client";

import React, { useEffect } from 'react';

const TypeButtonsGrid = () => {
  // Add viewport meta tags and PWA settings for iOS
  useEffect(() => {
    // Create or update viewport meta tag
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.name = 'viewport';
      document.head.appendChild(viewportMeta);
    }
    viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';

    // Add iOS-specific meta tags for PWA
    const metaTags = [
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Pokemon Types' }
    ];

    metaTags.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    });
  }, []);

  // Declarations for typeNames could be useful more later
  const typeNames = [
    'normal', 'fire', 'water', 'electric', 'grass', 'ice',
    'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
    'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
  ];

  // Type Colors
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
    fairy: '#D685AD'
  };

type PokemonType = keyof typeof typeColors;


  //Capitilizer
  const capitalize = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  //Event Handler for Clicks
  const handleTypeClick = (type: PokemonType) => {
    console.log(`Clicked: ${type}`);
    // You can replace this with your actual click handler
  };

  return (
    <div className="min-h-screen flex justify-center items-center" 
         style={{ 
           paddingTop: 'env(safe-area-inset-top)', 
           paddingBottom: 'env(safe-area-inset-bottom)',
           paddingLeft: 'env(safe-area-inset-left)',
           paddingRight: 'env(safe-area-inset-right)',
           padding: '8px'
         }}>
      <div className="max-w-sm w-full px-4">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Pokémon Types
        </h1>
        
        <div className="grid grid-cols-3 gap-2">
          {typeNames.map(type => (
            <button
              key={type}
              onClick={() => handleTypeClick(type)}
              className="p-3 rounded-xl font-bold uppercase text-xs transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg text-white"
              style={{ 
                backgroundColor: typeColors[type],
                boxShadow: `0 3px 8px ${typeColors[type]}30`
              }}
            >
              {capitalize(type)}
            </button>
          ))}
        </div>
        
        <p className="text-center text-gray-600 mt-4 text-sm">
          Select Any Type to Answer
        </p>
      </div>
    </div>
  );
};

export default TypeButtonsGrid;