import { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {
  const initialDeck = [];
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J'];
  const suits = ['♣', '♦', '♥', '♠'];

  // Initialize the deck with 52 cards
  useEffect(() => {
    for (let suit of suits) {
      for (let rank of ranks) {
        initialDeck.push({ rank, suit });
      }
    }
    setDeck([...initialDeck]);
  }, []);

  const [deck, setDeck] = useState([]);
  const [drawnCards, setDrawnCards] = useState([]);

  const handleDraw = () => {
    if (deck.length < 5) {
      alert("Not enough cards left in the deck to draw 5 cards.");
      return;
    }

    const newDrawnCards = [];
    const newDeck = [...deck];

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * newDeck.length);
      const drawnCard = newDeck.splice(randomIndex, 1)[0];
      newDrawnCards.push(drawnCard);
    }

    setDeck(newDeck);
    setDrawnCards(prevCards => [...newDrawnCards, ...prevCards]);
  };

  return (
    <div className='p-4 bg-green-600 min-h-[100vh]'>
      <h1 className="text-3xl font-bold text-white p-4">
        Random Draw from Deck of Cards
      </h1>
      <div className='w-20 h-28 bg-gray-300 rounded-md p-8 m-4 text-center flex flex-col items-center justify-center cursor-pointer' onClick={handleDraw}>
        <p className='font-bold text-lg cursor-pointer'>Draw 5 Cards</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 m-4 gap-4 justify-items-center'>
        {drawnCards.map((card, index) => (
          <Card key={index} rank={card.rank} suit={card.suit} />
        ))}
      </div>
    </div>
  );
}

export default App;
