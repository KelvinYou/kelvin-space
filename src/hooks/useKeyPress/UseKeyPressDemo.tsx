"use client";
import React from 'react'
import useKeyPress from '.';

const UseKeyPressDemo = () => {
  const wPressed = useKeyPress('w');

  return (
    <div>
      The {' "w" '} key is {!wPressed ? 'not ' : ''}pressed!

      <div>
        <br/>
        <br/>
        Reference: https://www.30secondsofcode.org/react/s/use-key-press/
      </div>
    </div>
  )
}

export default UseKeyPressDemo