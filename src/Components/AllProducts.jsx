import { useContext,useEffect,useState } from "react"
import { Store } from "./Context"
import axios from "axios"
import { Link } from "react-router-dom"
const AllProducts = ()=>{
const [products,setProducts] = useState()

    const get = useContext(Store)
    // console.log(get)

useEffect(()=>{

   const fetchData =async ()=>{
    //   const d1 =await fetch(`https://jsonplaceholder.typicode.com/users`)
    //   const d1 =await fetch('https://dummyjson.com/products/1')
    //   const d2 = await d1.json()
    //   return setData(d2.products)

    axios.get('https://fakestoreapi.com/products').then((res)=>{
        console.log("ateeq",res.data)
        setProducts(res.data)
    })
   }
   fetchData()
},[])
   
const btn = (ind)=>{
    const {title}=products[ind]
    // console.log(title)
    window.scrollTo({top:"0",left:"0",behavior:"smooth"})

}

// const getprice = products.map((item)=>{
//      return item.price
// })

// const filt = ()=>{

//     const getdata = getprice.sort((a,b)=>{
//          return b-a
//     })
//     console.log(getdata)
// }

return<>
     <h3 style={{height:"85px"}}></h3>
     <button onClick={()=>filt()}>Filter</button>
    <div style={{border:"1px solid red",display:"flex",gap:"2px",flexWrap:"wrap",padding:"10px",justifyContent:"space-around",marginTop:"60px"}}>
    {
        products?.map((item,index)=>{
            return<>
            <div  className= "proudctDiv"  key={index} style={{border:"1px solid blue",height:"300px",width:"250px",textAlign:"center",paddingTop:"30px",marginTop:"10px", borderRadius:"5px",backgroundColor:"darkslategray" }}>
            <img className="proudctImg" src={item.image} style={{height:"100px"}}></img>
            <li className="proudctLI">{item.title}</li>
            <li className="proudctLI">Price:${item.price}</li>
           <Link to={`/buypage/${item.id}`}><button style={{padding:"5px 20px",backgroundColor:"yellow"}} onClick={()=>btn(index)}>BuyNow</button></Link>
            </div>
            </>
        })
    }
    </div>
</>
}
export default AllProducts