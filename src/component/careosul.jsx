import React, { useEffect, useState } from 'react';
import axios from "axios";
import  './styles.css'
import { Link } from 'react-router-dom';














function Carou(){
const [product,setproduct] = useState([])
const [id,setid] = useState('')
const [cat,setcat]  = useState('')
const [produscts,setproduscts]  = useState([])
useEffect(()=>{

const url = cat ===''?"https://dummyjson.com/products":`https://dummyjson.com/products/category/${cat}`

 axios
.get(url)
.then((res)=>{console.log(res.data.products)
  setproduct(res.data.products)
}) 
},[cat])








useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setproduscts(res.data)
        console.log(res.data)
     
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


      // useEffect(() => {
      //   axios
      //     .get("https://dummyjson.com/products/categories")
      //     .then((res) => {
      //       setcat(res.data)
      //       console.log(res.data)
         
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // }, []);
    
























   return(

<div>
        <div className="my-4 justify-center	">

           {produscts.map((res,ind)=>(<button key={ind} className="my-2 mx-4 bg-color-blue-900" onClick={()=>{console.log(res.slug)
            setcat(res.slug)
           }} >{res.name}</button>))} 
            
     
        </div>
        
        <div className="justify-center	" >
    <div className='flex flex-row flex-wrap'>

{product.map((res)=>(
  <div className='mx-10 my-5' >
 


<div class="card" key={res.id}>
  <img src={res.thumbnail} alt="Denim Jeans" style={{ width: "80%" }} />
  <h1 style={{ fontSize: "30px" }}>
    {res.title}
  </h1>
  <p>
    {res.description}
  </p>
  <p>
    <Link     to={`/products/${res.id}`}     > 
    <button  onClick={()=>setid(res.id)}  >${res.price}</button>
    </Link>
  </p>
</div>

</div>
 


))}



        


  

    </div></div>
        </div>























   )
}
export default Carou;