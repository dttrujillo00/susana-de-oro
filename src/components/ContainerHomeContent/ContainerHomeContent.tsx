import React from 'react'
import './ContainerHomeContent.css'

interface Props {
    children: React.ReactNode;
}

export const ContainerHomeContent = ({ children }:Props) => {
  return (
    <div className='home-content-container'>
        {
            children
        }
    </div>
  )
}
