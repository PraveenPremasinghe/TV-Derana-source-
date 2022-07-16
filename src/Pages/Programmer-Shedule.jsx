import React from "react";

import Moment from 'react-moment';


import Header_2 from "../Components/Header_2/Header_2";
import Mainbanner_Card from '../Components/MainBanner-Card/Mainbanner_Card.js';
import MaincategoryContainer from  '../Components/Maincategory-Container/Maincategory-Container.jsx'
import Mainbanner from '../Components/Header/mainbackcover.png';
import '../Style/Programmer-Shedule.css'
import moment from "moment";
import { Icon } from '@iconify/react';
import Footer from "../Components/Footer/Footer";
import { getValue } from "@testing-library/user-event/dist/utils";
import { color } from "@mui/system";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header3 from "../Components/Header-03/Header-3.jsx"





function ProgrammerShedule(){

    const momentv = moment();



    const data = [
        { Time: "08:00 am - 09:00 am", Programme: "Space Jam", Status: "Over",color :"ffff"  },
        { Time: "09:00 am - 10:00 am", Programme: "John wick", Status: "Over" ,color :"ffff" },
        { Time: "11:00 am - 12:00 pm", Programme: "The Cover", Status: "Over" ,color :"ffff" },
        { Time: "13:00 pm - 01:00 pm", Programme: "Money heist", Status: "Live" ,color :"E40915" ,text:"ffff" },
        { Time: "02:00 pm - 03:00 pm", Programme: "Space Jam", Status: "Coming soon",color :"ffff",text:"000" },
        { Time: "04:00 pm - 05:00 pm", Programme: "The Cover", Status: "Coming soon" ,color :"ffff",text:"000"  },
        { Time: "06:00 pm - 07:00 pm", Programme: "Space Jam", Status: "Coming soon" ,color :"ffff" ,text:"000" },
        { Time: "08:00 pm - 09:00 pm", Programme: "Money heist", Status: "Coming soon" ,color :"ffff" ,text:"000" },
  
      ]

    return(

        <div>
            


        
             
            <Header3/>

<div className='Mainbannerdiv'>
<img src={Mainbanner}  width='100%'/>


</div>




<div className="Maincategory-Container">

<div class="main">
          <div class="maincategory_title">today programme schedule</div>
        </div>
        <hr className="hrclass" />
</div>

        
        
         <div className="sheduleTable">

           <div className="dateday">
<div className="day">{momentv.format("dddd")}  </div> 
<Icon icon="fluent:divider-short-24-regular" color="#333" height="28" />
                    <div className="date"> {momentv.format("l")}</div> 
</div> 


<table className="tableheader">
        <tr className="tabletrv">
          <th className="tableth">Time</th>
          <th className="tableth">Programme</th>
          <th className="tableth">Status</th>
        </tr>
        {data.map((val, key) => {
         
          return (

            
            <tr className="tabletr" key={key} style={{backgroundColor:`#${val.color}` ,color:`#${val.text}`}}>
              <td className="tabletd">{val.Time}</td>
              <td className="tabletd" >{val.Programme}</td>
              <td className="tabletd" ><div class="badge" style={{backgroundColor: val.Status==="Live"? "#ffff": "#ffff" ,color: val.Status==="Live"? "#E40915": "#000",borderRadius: val.Status==="Live"? "15px": "",padding: val.Status==="Live"? "5px 20px 5px 20px": "",color: val.Status==="Over"? "#808080": "#000"}}>{val.Status} <Icon icon="fluent:live-20-filled" color="#e40915" height="20" /> </div></td>
   
              <hr />
            </tr>
          )
        })}
      </table>
      </div>  




<Footer/>

            </div>
    );
}





export default ProgrammerShedule;