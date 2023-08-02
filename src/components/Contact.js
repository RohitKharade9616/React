import React from 'react'

export default function Contact() {
  return (
   <>
   <div className='container my-5' style={{width:"500px",height:"500px"}}>
   <form>
    <h1>Contact Us</h1>
   <div className=" mb-3">
    <label htmlFor="exampleInputName1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  
  <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Message</label>
</div>
  
  <button type="submit" className="btn btn-primary my-4">Submit</button>
</form>
</div>
   </>
  )
}
