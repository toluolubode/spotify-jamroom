import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Footer from '../components/footer'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const IndexPage = () => (
  <div>
    <Header />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>A New Way to Jam Out</h1>
        <p>Create and share playlists with friends</p>
        <Link to="/video">Join the Party</Link>
        <div className="HeroImage">
          <img src={require('../images/hero-image.svg')} width="250" />
      </div>
      </div>
      <div className="HeroImage2">
      <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none">
          <path fill="#00bd6e">
          <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s"
            values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

            M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
        
            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;" />
          </path>
        </svg>
        <img src={require('../images/video-img.png')} width="100%" />
      </div>
      {/* First Section */}
      <div className="Section1">
        <div className="SectionText" id="namejamroom">
          <h1>
            Create a Jamroom
          </h1>
          <img src={require('../images/text-underline.svg')} width="150" />
          <p>
          Name a jamroom anything you want. <br></br> 
          Inside jokes between friends are good too.
          </p>
        </div>
        <img src={require('../images/jamroom-name-entered.svg')} width="300" />
      </div>
      {/* Second Section */}
      <div className="Section1-right">
        <div className="SectionText" id="addfriends">
          <h1>
            Add friends
          </h1>
          <img src={require('../images/text-underline.svg')} width="150" />
          <p>
          Search for friends and family on the Spotify<br></br>  platform and instantly add them to your<br></br>  jamroom.
          </p>
        </div>
        <img src={require('../images/inside-jamroom.svg')} width="300" />
      </div>
       {/* Third Section */}
       <div className="Section1">
        <div className="SectionText" id="addsongs">
          <h1>
            Add your favorite <br></br>songs
          </h1>
          <img src={require('../images/text-underline.svg')} width="150" />
          <p>
          That song you all love singing? Add it into the <br></br> 
          jamroom and now everyone can sing it too.
          </p>
        </div>
        <img src={require('../images/inside-jamroom.svg')} width="300" />
      </div>
      {/* Fourth Section */}
      <div className="Section1-right">
        <div className="SectionText" id="jamout">
          <h1>
            Jam out!
          </h1>
          <img src={require('../images/text-underline.svg')} width="150" />
          <p>
          Jam out and rock on! Be as loud as you want.<br></br> We don’t mind.
          </p>
        </div>
        <img src={require('../images/jamroom-created.svg')} width="300" />
      </div>
      <div className="Testimonial">
      <img id="confetti-1" src={require('../images/confetti.svg')} width='45' />
      <img id="confetti-2" src={require('../images/confetti.svg')} width='45' />
      <p id="testimonial">
        I genuinely love this! Dance sessions with<br></br> my sister and
        my friends are so much fun now
      </p>
      <p id="testimonial-name">
        -Melissa Valencia
      </p>
      <img id="slider" src={require('../images/Slider.svg')} width='45' />
    </div>
    </div>
  </div>
)

export default IndexPage
