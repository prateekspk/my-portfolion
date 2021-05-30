import React from 'react'
import TypewriterEffect from '../Components/TypewriterEffect'


 
export default function Home() {

   const typeList = ['Programmer', 'Developer', 'Gamer']


    return (
        <div>
           <TypewriterEffect list={typeList}/>
        </div>
    )
}
