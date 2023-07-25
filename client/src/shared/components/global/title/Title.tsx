import React from 'react';

export default function Title({children}:{children:string}) {
  return (
    <div className='text-secondary_txt text-2xl font-bold'>
       {children}
    </div>
  )
}
