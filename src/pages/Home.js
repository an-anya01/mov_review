import { useContext } from "react";

import Loader from "../components/Loader";

import ShowsContext  from "../context/shows/showsContext";
import ListItem from "../components/ListItem";
import Search from "../components/Search";
const Home = () => {
  const showsContext = useContext(ShowsContext);
  const {Loading,shows}=showsContext;

  return (
    <div className='home'> 
    <Search/>
    {Loading ? (<Loader/>):(
    <div className="homepage__list">
      {shows.map((item)=>(<ListItem 
      key={item.show.id}
      id={item.show.id}
      image={item.show.image ? item.show.image.medium : " https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg" }
      name={item.show.name}
      rating={item.show.rating.average ? item.show.rating.average:" no rating found"}
      />))}
      </div>)}
    </div>
  )
}

export default Home