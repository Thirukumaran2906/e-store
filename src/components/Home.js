import React from 'react'
import "./Home.css"
import Footer from './Footer'
import MakerImage from "../item/young-barista-girl-makes-coffee-smiles_1157-36654.avif"

const Home = () => {
  return (
    <div>
    <section class="home" id="home">
         <div class="content">
             <h3>Welcome to Natural Cafe </h3>
              <p>Here coffee's are made with home Made rich coffee seeds and we also sell tasty home made healty snaks with low calories</p>
              <button class="explore" >Buy-Yours</button>
          </div>    
</section>
<section class="about" id="about">
    <h1 class="heading"><span>About</span>&nbsp;us</h1>
    <div class="row">
        <div class="image">
            <img src={MakerImage}/>
        </div>
        <div class="content">
            <h3>What makes our coffee special ?</h3>
            <p>Our coffee powder  made by us without any artificial mixing or any other taste sensing products. we directly harvest it from land of coffee</p>
            <p>Our Workers are world level Chefs with medals ,they are our BackBone for us  & Our Exported coffee maker filters and makes our coffee more tastier
            </p>
            <button class="explore">Know More</button>
        </div>
    </div>
</section>
<Footer />
    </div>
  )
}

export default Home
