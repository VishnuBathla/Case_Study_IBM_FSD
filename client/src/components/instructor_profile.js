import { useEffect, useState } from "react"
import Header from "./Header"
import './styles/profile.css'
import Edit_Profile from "./edit_profile"
import {useSelector} from 'react-redux'
const Profile = ()=>{
    const {initialState} = useSelector(state=>state.instructor)
    const [current,setCurrent]=useState({
        // "name":"Dr Angela Yu",
        // "expertise":"Developer and Lead Instructor",
        // "phone":"+1156789123",
        // "email":"angela123@gmail.com",
        // "description": "Consectetur amet labore tempor ut anim est. Nostrud proident nulla et consectetur. Et proident voluptate labore nulla. Ut officia dolore culpa laborum sunt sit elit irure quis consequat ut sint aute. Laborum dolore excepteur ex ipsum consequat pariatur nisi ex. Eu elit minim fugiat amet veniam sunt voluptate incididunt aliqua elit. Laborum ad non occaecat id enim dolor consectetur ut esse esse consectetur labore irure laboris.\r\nAliqua Lorem nulla nostrud ipsum proident dolor ex exercitation enim nisi mollit quis proident. Eiusmod tempor veniam tempor dolore reprehenderit cillum commodo. Incididunt laboris laboris quis consequat nostrud duis adipisicing eu duis esse in mollit incididunt ea. Fugiat pariatur commodo enim ut eiusmod culpa nisi tempor aliquip adipisicing ut exercitation nulla duis. Ipsum dolore consectetur ad ea quis cupidatat irure ullamco deserunt deserunt dolore proident. Esse nulla cupidatat mollit aliqua ex proident incididunt minim velit anim elit in proident. Mollit tempor deserunt ex dolore ut do ad do laboris labore cupidatat duis pariatur.\r\n",
        // "imgUrl":"https://this-person-does-not-exist.com/img/avatar-gen75d260b9285e534b8f4b0ce1f445f60a.jpg"
    })
    useEffect(()=>{
        console.log(initialState)
        setCurrent(initialState)
    },[initialState])
    const [modal,setModal] = useState(false)
    return (
        <>
        <Header/>
        <div style={{display:'flex'}}>
        <div style={{width:'30%',marginRight:'5%'}}>
            <img src={current.imageUrl} style={{width:'70%',paddingTop:'40%',paddingLeft:'20%'}} alt="instructor"/>
        </div>
        <div style={{width:'60%',textAlignLast:'left',paddingTop:"10%"}}>
            <h1 style={{fontWeight:'bold',marginBottom:0}}>{current.name}</h1>
            <span>{current.expertise}</span>
            <span>T:{current.phone}</span>
            <span>E: {current.email}</span>
            <br/>

            <p style={{textAlign:'left'}}>{current.description}</p>

        </div>
        </div>
        <button className="btn btn-primary" style={{margin:"0 35%"}} onClick={()=>setModal(true)}>Edit</button>
        {modal &&
            <Edit_Profile modal={modal} setModal={setModal} setCurrent={setCurrent} current={current}/>}
        </>
    )
}
export default Profile