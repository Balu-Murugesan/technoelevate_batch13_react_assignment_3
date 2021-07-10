import React from 'react'

export default function Employeeportal() {
    const employeport=[
        {
            id:1,
            img:"https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_960_720.jpg",
            name:"vijay",
            text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, quia!",
        }, {
            id:2,
            img:"https://cdn.pixabay.com/photo/2017/02/26/04/50/children-moc-chau-2099536_960_720.jpg",
            name:"Ajith",
            text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, quia!",
        }, {
            id:3,
            img:"https://cdn.pixabay.com/photo/2020/03/19/18/20/motocross-4948269_960_720.jpg",
            name:"Sandy",
            text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, quia!",
        }, {
            id:4,
            img:"https://cdn.pixabay.com/photo/2014/09/07/22/33/motorbike-438464_960_720.jpg",
            name:"Balu",
            text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, quia!",
        }, {
            id:5,
            img:"https://cdn.pixabay.com/photo/2014/07/05/16/44/biker-384921_960_720.jpg",
            name:"Kamal",
            text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, quia!",
        }, {
            id:6,
            img:"https://cdn.pixabay.com/photo/2016/11/29/10/21/dirt-bike-1868996_960_720.jpg",
            name:"Bala",
            text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, quia!",
        }
    ]
    const stylediv={
        margin:"20px",
        width:"330px"
    }
    return (
        <div className="container mt-5">
            <h2>Employee Portal</h2>
           <div className="row">
                {
                employeport.map(({id,img,name,text})=>{
                    return(
                        <div key={id} style={stylediv}  className="shadow-lg p-3 mb-5 bg-white rounded border border-secondary text-center">
                            <img className="img-fluid rounded-circle mt-4" src={img} alt="" width="200px" />
                            <h3>{name}</h3>
                            <p>{text}</p>
                            <button className="btn bg-success mb-4">+</button>
                        </div>
                    )
                })
            }
           </div>
        </div>
    )
}
