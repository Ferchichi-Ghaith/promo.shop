import { TextScrollHero } from '@/components/elements/TextScroll'
import React from 'react'
import { CarouselSpacing } from '../elements/ProductMainView'
import { About } from './About'

const Herosection = () => {
  return (
    
<div className='min-h-screen w-full'>

   
    <TextScrollHero  /> 
   
      <CarouselSpacing />
   <div className='px-1'><About /></div>
    

    

   
   </div> 
    
  )
}

export default Herosection