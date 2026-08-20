import { createContext } from "react"
export const Store = createContext()

export const CreateStore = ({children})=>{
    var data = "ateeq"
return<Store.Provider value={data}>{children}</Store.Provider>
}