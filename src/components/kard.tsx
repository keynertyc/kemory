import React from 'react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

type Props = {
  card: IKard
  handleFlip: (id: number, matched: boolean) => void
}

const Kard: React.FC<Props> = ({ card, handleFlip }) => {
  const handleClick = () => {
    handleFlip(card.id, card.matched)
  }

  return (
    <Card key={card.id} className='w-[75px] h-[100px]' onClick={handleClick}>
      <Image
        src={card.flipped ? card.image ?? card.defaultImage : card.defaultImage}
        alt='Picture of the author'
        width={75}
        height={100}
        className='object-fill h-full rounded'
      />
      {/* <img
        src={card.flipped ? card.image ?? card.defaultImage : card.defaultImage}
        alt='Picture of the author'
        width={75}
        height={100}
        className='object-fill h-full rounded'
      /> */}
    </Card>
  )
}

export default Kard
