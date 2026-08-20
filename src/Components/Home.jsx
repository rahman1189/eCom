import AllProducts from "./AllProducts"
const Home = () => {

   
    return <>
     <h3 >Nav</h3>
        <h3>Home Page...</h3>
        <div style={{ textAlign: "right", padding:"20px"}}>
            <img src="/images/hero.jpg " style={{ height: "500px" }}></img>
        </div>
          <h3 style={{textAlign:"center"}}>Products</h3>
        <AllProducts/>
    </>
}

export default Home