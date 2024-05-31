import { useEffect, useState } from 'react'
import Card from './components/Card'

function App() {
  const ranks = ['A','2','3','4','5','6','7','8','9','10','K','Q','J']
  const suits = ['♣','♦','♥','♠']
  const [cardNumber, setCardNumber] = useState('')
  const [cardSuit, setCardSuit] = useState('')
  const [cardNumber1, setCardNumber1] = useState('')
  const [cardSuit1, setCardSuit1] = useState('')
  const [cardNumber2, setCardNumber2] = useState('')
  const [cardSuit2, setCardSuit2] = useState('')
  const [cardNumber3, setCardNumber3] = useState('')
  const [cardSuit3, setCardSuit3] = useState('')
  const [cardNumber4, setCardNumber4] = useState('')
  const [cardSuit4, setCardSuit4] = useState('')


  const handleDraw = () => {
    const randomCard = Math.floor(Math.random() * ranks.length)
    const randomCard1 = Math.floor(Math.random() * ranks.length)
    const randomCard2 = Math.floor(Math.random() * ranks.length)
    const randomCard3 = Math.floor(Math.random() * ranks.length)
    const randomCard4 = Math.floor(Math.random() * ranks.length)

    const randomSuit = Math.floor(Math.random() * suits.length)
    const randomSuit1 = Math.floor(Math.random() * suits.length)
    const randomSuit2 = Math.floor(Math.random() * suits.length)
    const randomSuit3 = Math.floor(Math.random() * suits.length)
    const randomSuit4 = Math.floor(Math.random() * suits.length)

    setCardNumber(ranks[randomCard])
    setCardSuit(suits[randomSuit])
    setCardNumber1(ranks[randomCard1])
    setCardSuit1(suits[randomSuit1])
    setCardNumber2(ranks[randomCard2])
    setCardSuit2(suits[randomSuit2])
    setCardNumber3(ranks[randomCard3])
    setCardSuit3(suits[randomSuit3])
    setCardNumber4(ranks[randomCard4])
    setCardSuit4(suits[randomSuit4])
  }


  return (
    <div className='p-4 bg-green-600 h-screen w-screen'>
      <h1 className="text-3xl font-bold text-white m-4">
        Cards Deck
      </h1>
      <div className='w-20 h-28 bg-gray-300 rounded-md m-4 text-center flex flex-col items-center justify-center cursor-pointer' onClick={handleDraw}>
          <p className='font-bold text-lg cursor-pointer'>Draw 5 Cards</p>
      </div>
      <div className='flex flex-wrap m-4 gap-8'>
        {cardNumber && <Card number={cardNumber} suit={cardSuit}/>}
        {cardNumber1 && <Card number={cardNumber1} suit={cardSuit1}/>}
        {cardNumber2 && <Card number={cardNumber2} suit={cardSuit2}/>}
        {cardNumber3 && <Card number={cardNumber3} suit={cardSuit3}/>}
        {cardNumber4 && <Card number={cardNumber4} suit={cardSuit4}/>}
      </div>
    </div>
  )
}

export default App
