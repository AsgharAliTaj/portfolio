import {AiFillGithub} from 'react-icons/ai';

import ApiImage from "../assets/api.webp";
import Portfolio from "../assets/portfolio.jpg";

const Works = () => {
  
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-1">

    <div class="card-main">
      <img class="rounded-t-xl" src={ApiImage} alt="" />
      <div class="px-5 pb-3">
      <h5 class="card-heading">Movie Rental</h5>

      <p class="card-para">Api for movie rental made with Golang, go-chi, Postgresql using sqlx and docker.</p>
      <div className="flex justify-end">
      <a href="https://github.com/AsgharAliTaj/govidly" class="card-button">
    Source <AiFillGithub className="ml-1 inline"/>
      </a>
      </div>
      </div>
    </div>

    <div class="card-main">
      <img class="rounded-t-xl" src={Portfolio} alt="" />
      <div class="px-5 pb-3">
      <h5 class="card-heading">Portfolio </h5>

      <p class="card-para">current portfolio created using reactjs, react-icons, react-router-dom, tailwindcss.</p>
      <div className="flex justify-end">
      <a href="https://github.com/AsgharAliTaj/portfolio" class="card-button">
    Source <AiFillGithub className="inline"/>
      </a>
    </div>
      </div>
    </div>
    </div>
  )
}

export default Works;
