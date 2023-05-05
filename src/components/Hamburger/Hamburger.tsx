import React from 'react';
import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react'

const HamburgerMenu = () => {
    const [isOpen, setOpen] = useState(false)

    const updateOpen = () => {
        setOpen(!isOpen);
        console.log(isOpen);
        
    }

  return (
    <Hamburger toggled={isOpen} toggle={updateOpen} />
  )
}

export default HamburgerMenu