import React from 'react';
import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { toggle } from './hamburgerSlice';

const HamburgerMenu = (props: any) => {
  const isOpen = useSelector((state: RootState) => state.menuState.open);
  const dispatch = useDispatch();

    const updateOpen = () => {
        dispatch(toggle());      
        console.log(isOpen);
          
    }

  return (
    <Hamburger label={props.label} toggled={isOpen} toggle={updateOpen} />
  )
}

export default HamburgerMenu