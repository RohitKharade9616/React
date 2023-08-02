import React from 'react'
import { Link } from 'react-router-dom'


export default function About() {


  return (
    <>
     <div class="container my-3">
        <div class="inner-section">
            <h1>About Us</h1>
            <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Doloribus velit ducimus, enim inventore earum, eligendi 
                nostrum pariatur necessitatibus eius dicta a voluptates sit 
                deleniti autem error eos totam
                 nisi neque voluptates sit deleniti autem error eos totam nisi neque.
            </p>
            <div class="skills">
                <button type="button" > <Link to="/contact">Contact Us</Link></button>
            </div>
        </div>
    </div>
    </>
  )
}
