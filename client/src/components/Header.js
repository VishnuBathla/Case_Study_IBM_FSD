import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link} from 'react-router-dom';
const Header = ()=>{
    return (
        <header style={{display:'grid', height:'8vh',background:'black',color:'white'}}>
            <Link to={'/main'} style={{fontSize:'1.5rem',textAlign:'left',gridColumn:1,marginTop:'auto',color:'white',fontWeight:'bolder',textDecoration:'none'}} >LearnIt</Link>
            <span style={{display:'flex',justifyContent:'end',gridColumn:2,marginTop:'auto'}}>
            <span style={{marginRight:'2%'}} >Library</span>
            <span style={{marginRight:'2%',gridColumn:1}}>My Course</span>
            <SearchIcon style={{color:'white',marginRight:'2%',gridColumn:1}}/> 
            <NotificationsIcon style={{color:'white',gridColumn:1}} />
            </span>

        </header>
    )
}
export default Header