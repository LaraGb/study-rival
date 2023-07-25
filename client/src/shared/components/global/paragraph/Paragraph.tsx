import React from 'react';

export default function Paragraph({children}:{children:string}) {
  return (
    <p className='text-base text-tertiary_txt'>
      {children}
    </p>
  )
}
