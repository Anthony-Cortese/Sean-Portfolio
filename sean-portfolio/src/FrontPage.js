import React from 'react'
import { Link } from 'react-router-dom'
import './FrontPage.css'
import './NavBar.css'

function FrontPage() {
    return (
        <div className='main-div'>
             <div className='main-nav'>
            <div className='name-nav'>
                <h1 className='firstName'>Sean Cortese</h1>
            </div>
            <div className='nav-links'>
                <Link to='/Bio'><nav className='navs'>Bio</nav></Link>
                <nav className='navs'>Photos</nav>
                <nav className='navs'>Reel</nav>
                <nav className='navs'>Videos</nav>
                <nav className='navs'>Resume</nav>
                <nav className='navs'>Contact</nav>

            </div>
            
        </div>
            <div className='left-side'>
                <div className='actor-info'>
                    <h3 className='actor'>Actor. Performer. Writer.</h3>
                </div>
            </div>
            <div className='right-side'>
                <div className='fro-img'>
                <img className='front-img' src="https://i.ibb.co/23zMBvj/frontpage.png" alt="frontpage" border="0"/>
                </div>
                {/* <img className='front-img'src="https://i.ibb.co/Z8ZS10h/IMG-0858.jpg" alt="IMG-0858" border="0"/> */}
            </div>
            
        </div>
    )
}

export default FrontPage
