import { useEffect,useContext } from "react"
import { useParams } from "react-router-dom";

import ShowsContext from "../context/shows/showsContext"
import Loader from "../components/Loader";

const Single = () => {
   const {id}=useParams();
  const {getSingleShow, singleShow, loading}=useContext(ShowsContext);
  useEffect(()=>{
    getSingleShow(id);
    
  },[]);
  
  const removeTags =(text)=>{
    if(text===null || text==="")
    {
      return false;
    }else{
      text=text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi,"");
  }

  return (
    <>
    {loading ? <Loader/> : 
    <div className="singleshow">
      <img src={singleShow.image ? singleShow.image.medium : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} 
      alt={ singleShow.name}/>
      <div className="singleshow__info">
        <h1>{singleShow.name}</h1>
        {singleShow.genres && singleShow.genres.map(genre=>(
          <span key={genre} className="singleshow__genre">{genre}</span>
        ))}
        <p>
          <string>Status: </string> {singleShow.status && singleShow.status}
         </p>
         <p>
          <string>Rating: </string> {singleShow.rating ? singleShow.rating.average: "No Rating"}
         </p>
         <p>
          <string>Official Site: </string> {singleShow.officialSite ? (<a href={singleShow.officialSite} target="blank" rel="noreferrer">{singleShow.officialSite}</a>): "No Official Site"}
         </p>
         <p>{singleShow.summary && removeTags(singleShow.summary)}</p>


      </div>
      
      </div>}
    </>
  )
}

export default Single