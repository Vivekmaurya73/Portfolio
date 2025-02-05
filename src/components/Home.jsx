import React from 'react'
import Pdf from './Pdf/resume.Pdf';
import hero from './data/hero.json';

const Home = () => {
  return (
    <>
     <div className="container home">
      <div className="left">
        <h1>Welcome to My Portfolio</h1>
        <a href={Pdf} download="resume.pdf" className="btn btn-outline-warning">
          Download Resume
        </a>
      </div>
      <div className="right">
        <div className="img">
          <img src={`/assets/${hero.imgSrc}`} alt="Hero" />
        </div>
      </div>
    </div>
  

      {/* <div className="left">
           <h1>Welcome to My Portfolio</h1>
        
           <a href={Pdf} download ="resume.Pdf"  className="btn btn-outline-warning">Download resume</a>
        
        <div className="right">
          <div className="img">
          <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Home;