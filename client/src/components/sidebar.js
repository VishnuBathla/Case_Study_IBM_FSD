import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import FolderIcon from '@mui/icons-material/Folder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ForumIcon from '@mui/icons-material/Forum';
import ShareIcon from '@mui/icons-material/Share';
import HelpIcon from '@mui/icons-material/Help';
import { useNavigate } from 'react-router-dom';
import CreatQuiz from './CreateQuiz';
const SideBar = ()=>{
    const navigate = useNavigate()

    return (
        <div style={{display:'flex',width:'20%',alignContent:'left',flexDirection:'column'}}>
        <p style={{alignContent:'center',textAlign:'left',margin:"1% 0",cursor:'pointer'}} onClick={()=>{navigate('/profile')}}>
            <AccountCircleIcon/> Teacher Profile
        </p>
        <hr style={{margin:"1% 0"}}/>
        <p style={{alignContent:'left' ,textAlign:'left',margin:"1% 0",cursor:'pointer'}}>
            <DashboardCustomizeIcon/> Dashboard Customize
        </p>
        <p style={{alignContent:'left',textAlign:'left',margin:"1% 0",cursor:'pointer'}}>
            <FolderIcon/> My Courses
        </p>
        <p style={{alignContent:'left',textAlign:'left',margin:"1% 0",cursor:'pointer'}}>
         <AddCircleOutlineIcon/> Create Course
        </p>
        <p style={{alignContent:'left',textAlign:'left',margin:"1% 0",cursor:'pointer'}}>
            <CreatQuiz/>
        </p>
        <p style={{alignContent:'left',textAlign:'left',margin:"1% 0",cursor:'pointer'}}>
            <EventAvailableIcon/> Time Table
        </p>
        <p style={{alignContent:'left',textAlign:'left',margin:"1% 0",cursor:'pointer'}}>
            <ForumIcon/> Discussion Forum
        </p>
        <hr style={{margin:"1% 0"}}/>
        <p style={{alignContent:'left',textAlign:'left',margin:"1% 0",fontSize:'1.1rem'}}>
        More actions</p>
        <p style={{alignContent:'left',textAlign:'left',margin:"1% 0",cursor:'pointer'}}>
            <ShareIcon/> Invite Friends
        </p>
        <p style={{alignContent:'left',textAlign:'left',margin:"1% 0",cursor:'pointer'}}>
            <HelpIcon/> Help
        </p>
        </div>
    )
}
export default SideBar