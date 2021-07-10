import React from 'react'

export default function Home() {
    return (
        <div className="container mt-4" >
            <div className="card mb-3">
               <div className="row no-gutters">
                <div className="col-md-4">
                    <img className="img-fluid"  src="https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png" alt="" />
                </div>
                
                <div className="col-md-8">
                    <div className="card-body">
                    <h2>Learning to Code</h2>
                    <h3 className="card-title text-secondary">OPENING A DOOR TO THE FUTURE</h3>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloribus minus doloremque, id ipsam sit eos praesentium sint odit adipisci expedita tenetur nisi quam aliquam inventore facilis, alias ipsa.</p>
                     <div className="text-right">
                        <button  className="btn text-success ">Read More</button>
                    </div>
                    </div>
                </div>
               </div>
            </div>
            <div className="card mb-3">
               <div className="row no-gutters">
                    <div className="col-md-8">
                    <div className="card-body">
                    <h2>JAVA IS NOT THE SAME AS JAVASCRIPT</h2>
                    <h3 className="card-title text-secondary">OPENING A DOOR TO THE FUTURE</h3>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus doloribus minus doloremque, id ipsam sit eos praesentium sint odit adipisci expedita tenetur nisi quam aliquam inventore facilis, alias ipsa.</p>
                    <div className="text-right">
                        <button  className="btn text-success ">Read More</button>
                    </div>
                    
                    </div>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid"  src="https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_960_720.png" alt="" />
                </div>
               </div>
            </div>
           
        </div>
    )
}
