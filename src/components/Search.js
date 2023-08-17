import { useState,useContext } from "react";
import Alert from "./Alert";
import ShowsContext from "../context/shows/showsContext";
import AlertsContext from "../context/alerts/AlertContext";
const Search = () => {
    const[searchTerm, setSearchTerm] =useState("");
    const showsContext = useContext(ShowsContext);
    const {searchShows}=showsContext;

    const {alert, setAlert}= useContext(AlertsContext)
    const onSearchHandler =(e)=>{
        e.preventDefault();
           if(searchTerm==="")
           {
            setAlert("Please Enter Something","danger")
           }else{
            searchShows(searchTerm)
           }
  
      
    }
  return (
    <div className="search">
      {alert? <Alert message = {alert.message} type={alert.type} />: null}
        <form className="search__form">
            <input type="text" placeholder="Search For Tv Shows" value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}/>
            <button className="btn btn-block" onClick={onSearchHandler}>SEARCH</button>


        </form>
        
        </div>
  )
}

export default Search