import React from 'react'
import { useState } from 'react'
const Voting = () => {
    const [voteOne, setvoteOne] = useState(0);
    const [voteTwo, setvoteTwo] = useState(0);
    const [voteThree, setvoteThree] = useState(0);

    const resetVotes = () => {
        setvoteOne(0);
        setvoteTwo(0);
        setvoteThree(0);
      };
let voteFor01 = () =>{
console.log("Vote for 01");
setvoteOne(voteOne + 1);
}
let voteFor02 = () =>{
    console.log("Vote for 02");
    setvoteTwo(voteTwo + 1)
}
let voteFor03 = () =>{
    console.log("Vote for 03");
    setvoteThree(voteThree + 1)
}
  return (
    <>
    <h1>Voting App</h1>
    <div className="vote-container">
        
        <div className="items"><p className='name01'> Candidate 01</p><button id='btn01' onClick={voteFor01}>Vote </button></div>
        <div className="items"><p className='name02'> Candidate 02</p><button id='btn02' onClick={voteFor02}>Vote</button></div>
        <div className="items"><p className='name03'> Candidate 03</p><button id='btn03' onClick={voteFor03}>Vote</button></div>
    </div>
    <div className="counter">
        <p className='name01'>Total Votes for candidate 01 : {voteOne}</p>
        <p className='name02'>Total Votes for candidate 02 : {voteTwo}</p>
        <p className='name03'>Total Votes for candidate 03 : {voteThree}</p>
    </div><button id='btn04' onClick={resetVotes}>Reset Votes</button>
    </>
  )
}

export default Voting