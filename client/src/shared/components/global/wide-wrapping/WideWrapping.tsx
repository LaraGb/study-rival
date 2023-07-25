import React from 'react';

export default function WideWrapping({children}:{children:React.ReactNode}) {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
        {children}
    </div>
  )
}
