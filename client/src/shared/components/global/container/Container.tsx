import React from 'react'
import WideWrapping from '../wide-wrapping/WideWrapping'

export default function Container({children}:{children:React.ReactNode}) {
  return (
    <div className='py-6'>
       <WideWrapping>
         {children}
       </WideWrapping>
    </div>
  )
}
