import { useState } from "react"
const Test = () => {
    const [data, setData] = useState(10)
const btn = ()=>{
    setData(data -1)
    if(data == 2){
            alert("1 left")
        }
        else if(data == 0) {
            alert("out of stock")
            return setData(0)
        }
}
console.log("data:",data)
return <>
    <h3>Data:{data}</h3>
    <button onClick={() => btn()}>button</button>
</>
}
export default Test