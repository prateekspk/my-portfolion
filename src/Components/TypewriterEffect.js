import React from 'react'
import Typewriter from 'typewriter-effect';

export default function TypewriterEffect({list}) {
    return (
        <div>
             <Typewriter
  options={{
    strings: list,
    autoStart: true,
    loop: true,
  }}
/>
        </div>
    )
}
