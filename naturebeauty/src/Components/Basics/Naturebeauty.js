import wonders from "./NaturebeautyApi";
import './style.css';
import NatureCards from "./NatureCards";
import { useState } from "react";
import Navigation from './Navigation';


function Naturebeauty() {

    let [data, setData] = useState(wonders);

    function filterItem(category)
    {
        if(category=="All")
        {
          setData(wonders);
          return;
        }

       const  updataedList=  wonders.filter((item)=>{

        return item.category === category;

        })
         setData(updataedList);

    }

    const uniqueList = [... new Set (wonders.map((item)=>{

       return item.category;

    })), "All"]

    let [menuList,setMenuList]= useState(uniqueList);

    return (
        <>

           <Navigation  filterItem ={filterItem} menuList={menuList}/>

            <NatureCards data={data} />
        </>
    )
}

export default Naturebeauty;