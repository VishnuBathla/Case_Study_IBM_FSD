import Header from "./Header"
import './styles/profile.css'
const Profile = ()=>{
    const current={
        "id":0,
        "Name":"Dr Angela Yu",
        "Expertise":"Developer and Lead Instructor",
        "Country Code":"+1",
        "Telphone No":"156789123",
        "Email":"angela123@gmail.com",
        "description": "Consectetur amet labore tempor ut anim est. Nostrud proident nulla et consectetur. Et proident voluptate labore nulla. Ut officia dolore culpa laborum sunt sit elit irure quis consequat ut sint aute. Laborum dolore excepteur ex ipsum consequat pariatur nisi ex. Eu elit minim fugiat amet veniam sunt voluptate incididunt aliqua elit. Laborum ad non occaecat id enim dolor consectetur ut esse esse consectetur labore irure laboris.\r\nAliqua Lorem nulla nostrud ipsum proident dolor ex exercitation enim nisi mollit quis proident. Eiusmod tempor veniam tempor dolore reprehenderit cillum commodo. Incididunt laboris laboris quis consequat nostrud duis adipisicing eu duis esse in mollit incididunt ea. Fugiat pariatur commodo enim ut eiusmod culpa nisi tempor aliquip adipisicing ut exercitation nulla duis. Ipsum dolore consectetur ad ea quis cupidatat irure ullamco deserunt deserunt dolore proident. Esse nulla cupidatat mollit aliqua ex proident incididunt minim velit anim elit in proident. Mollit tempor deserunt ex dolore ut do ad do laboris labore cupidatat duis pariatur.\r\n",
        "imgUrl":"https://this-person-does-not-exist.com/img/avatar-gen75d260b9285e534b8f4b0ce1f445f60a.jpg"
    }
    return (
        <>
        <Header/>
        <div style={{display:'flex'}}>
        <div style={{width:'30%',marginRight:'5%'}}>
            <img src={current.imgUrl} style={{width:'70%',paddingTop:'100%',paddingLeft:'20%'}} alt="instructor"/>
        </div>
        <div style={{width:'60%',textAlignLast:'left',paddingTop:"10%"}}>
            <h1 style={{fontWeight:'bold',marginBottom:0}}>{current.Name}</h1>
            <span>{current.Expertise}</span>
            <span>T: {current["Country Code"]} {current["Telphone No"]}</span>
            <span>E: {current.Email}</span>
            <p style={{textAlign:'left'}}>{current.description}</p>

        </div>
        </div>
        </>
    )
}
export default Profile