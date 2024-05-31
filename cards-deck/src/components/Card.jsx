import React from 'react'

const Card = ({ rank, suit}) => { 
    const color = (
        suit === '♠' || suit === '♣' ? 'black' : 'red-600'
    ) 
    return (
        <div className={`w-20 h-28 bg-white rounded-md flex flex-col p-2 text-${color}`}>
            <div>
                <p className='font-bold text-lg'>{rank}</p>
            </div>
            <div className='text-center'>
                <p className='text-5xl'>{suit}</p>
            </div>
        </div>
    )
}

export default Card