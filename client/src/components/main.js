import { useState } from "react"
import Header from "./Header"
import SideBar from "./sidebar"

const Main = ()=>{
    const [load,loader]= useState(<></>)
    return(
        <>
        <Header/>
        <div style={{display:'flex'}}>
        <SideBar comp_load={loader}/>
        {load}
        </div>
        </>
    )
}
export default Main