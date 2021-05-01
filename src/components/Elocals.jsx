import React from 'react'
import './elocals.css'
import img from '../img/img1.jpg'

const Elocals = () => {
    return (
        <>
         <div className="main"> 
             <div className="main_left">
                 <div className="content">

                 <h2>Make Money by becoming a elocals business partner</h2> 
                 <button className="btn btn-danger">Start Selling</button> 
                 <div className="radio_container">
                 <input type="radio" id="Pan_card" name="elocal" value="pan"></input> 
                 <label for="Pan card">Pan Card</label>
                 <input type="radio" id="Shop" name="elocal" value="shop"></input>
                 <label for="shop">Shop Address Proof</label>
                 <input type="radio" id="gst" name="elocal" value="gst"></input>
                 <label for="gst">GST (if Available) </label>
                 </div>
                 </div>
             </div>
             <div className="main_right">
             
             </div>
         </div>

        </>
    )
}

export default Elocals
