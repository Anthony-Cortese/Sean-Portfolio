import React from 'react'
import './Bio.css'

function Bio() {
    return (
        
        <div className='wrapper'>
            <div className='bio-name'>
                <h3 className='namebio'>Sean Cortese</h3>
            </div>
            <div className='section parallax bg1'>
                <h1 className='bio-text'>Biography</h1>  
            </div>
            <div className='static'>
                <p className='bio-para'>About me and paragraph info</p>

            </div>
            {/* <div className='section parallax bg2'>
                <h1>Sean Cortese</h1>
            </div> */}
            
            {/* <div className='bio-img'>
                <img className='imgbio'src="https://i.ibb.co/23zMBvj/frontpage.png" alt="frontpage" border="0"/>
            </div> */}
            
        </div>
    )
}

export default Bio
