const CourseCard = ({data})=>{
    // {
    //     "id":0,
    //     "imgUrl":'https://randomwordgenerator.com/img/picture-generator/53e4d246495bad14f1dc8460962e33791c3ad6e04e507440722d72d5954ac1_640.jpg',
    //     "Price":10,
    //     "Title":"oppo"
    // }
    return(
        <div style={{display:'inline-flex',padding:'1% 3%'}}>
        <div><img src={data.imgUrl} style={{width:'28vh'}} alt={data.Title}/>
        <span style={{textAlignLast:'center'}}>{data.Title}</span>
        <span style={{backgroundColor:'grey',display:'flex',justifyContent:'space-between',padding:'3%'}}>${data.Price} <span style={{background:'black',color:'white'}}>ADD TO CARD</span></span>
        </div>
        </div>
    )
}
export default CourseCard