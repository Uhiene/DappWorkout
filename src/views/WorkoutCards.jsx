import React from 'react'
import Card from '../components/Card'
import { useGlobalState } from '../store'

const WorkoutCards = () => {
  const [cards] = useGlobalState('cards')
  return (
    <div className="p-10">
      <h1 className="text-2xl text-center sm:text-start text-[#1b4247] font-medium">
        Popular body fit
      </h1>
      <div className='flex overflow-x-scroll hide-scroll-bar'>
        <div className="flex flex-nowrap justify-center space-x-4 md:space-x-8">
        {cards.map((p, i) => (
          <Card key={i} plan={p} />
        ))}
      </div>
      </div>
      
    </div>
  );
}

export default WorkoutCards