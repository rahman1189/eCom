import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";

const BuyPage = () => {
    const [buy, setBuy] = useState([])
    const [product, setProduct] = useState()
    // const [pro, setPro] = useState([])
    const { id } = useParams()
    console.log(id)


    useEffect(() => {
        const getFun = async () => {
            const getID = await axios.get(`https://fakestoreapi.com/products`)
            setProduct(getID.data)

        }
        getFun()
    }, [])

    useEffect(() => {
        const fun = async () => {
            const getID = await axios.get(`https://fakestoreapi.com/products/${id}`)

            setBuy(getID.data)
        }
        fun()
    }, [id])
    console.log(buy)

const goTop = ()=>{
    window.scrollTo({top:"0",left:"0",behavior:"smooth"})
}
    return <>
        <h3 >Nav</h3>
        <h3 style={{margin:"60px 0px 0px 0px"}}>BuyPage...</h3>
        <div style={{padding:"20px"}}>

            <div style={{backgroundColor:"darkslategray" ,borderRadius:"5px",textAlign:"center",height:"60vh"}}><img src={buy.image} style={{height:"350px"}}></img></div>
            <div>
                <h2 style={{ backgroundColor: "lightgray" }}>{buy.title}</h2>
                <h3 style={{ backgroundColor: "gray" }}>Price:${buy.price}</h3>
                <button  className="btn"  style={{padding:"5px 20px",backgroundColor:"yellow"}}>Add to Cart</button>
                <p style={{ backgroundColor: "lightgray" }}>Description: {buy.description}</p>
            </div>

        </div>
<h1 style={{textAlign:"center"}}>Buy More</h1>
<hr></hr>
        <div  style={{border:"1px solid red",display:"flex",gap:"2px",flexWrap:"wrap-reverse",padding:"10px",justifyContent:"space-around",overflow:"hidden",}}>
                {
                    product?.map((item, index) => {
                        return <>
                        <div className="proudctDiv" key={index} style={{border:"1px solid blue",height:"250px",width:"200px",textAlign:"center",paddingTop:"30px",marginTop:"10px",overflow:"hidden",}}>
                            <img style={{ height: "100px",}} src={item.image}></img>
                            <li style={{fontSize:"12px"}}>Title:{item.title}</li>
                            <li>Price:${item.price}</li>
                              <Link to={`/buypage/${item.id}`}><button style={{padding:"5px 20px",backgroundColor:"yellow"}} onClick={()=>goTop()}>BuyNow</button></Link>
            </div>
                        </>
                    })
                }

        </div>
    </>
}

export default BuyPage;