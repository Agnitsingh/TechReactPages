import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

    <div className="home2">

        <img src={vg} alt="Graphics" />

        <div>
            <p>
                We are the solution to the tech problem you face everyday. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolorem omnis!
            </p>
        </div>

    </div>

    <div className="home3" id='about'>
       <div>
         <h1>Who we are?</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque autem eveniet, inventore quos qui laudantium explicabo dolores quibusdam, aut totam earum perspiciatis quisquam debitis maxime magni libero aperiam vitae aliquid quo distinctio ut sed in dicta modi! Tempora, cum! Ab culpa, rerum eligendi quasi error corporis animi omnis soluta cumque. Deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum odio sed molestias quo in corporis distinctio a obcaecati voluptas eaque? Odio ad impedit fugiat sit officia consectetur, quae voluptate laboriosam!</p>
        </div> 
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay: "0.3s"}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>   
                </div>

                <div style={{animationDelay: "0.5s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>   
                </div>

                <div style={{animationDelay: "0.7s"}}>
                    <AiFillYoutube />
                    <p>Youtube</p>   
                </div>

                <div style={{animationDelay: "1s"}}>
                    <AiFillInstagram />
                    <p>Instagram</p>   
                </div>
            </article>
        </div>
    </div>
    </>

  )
}

export default Home