
import React from 'react';



import Header from './Components/Header/Header.js';
import Mainbanner_Card from './Components/MainBanner-Card/Mainbanner_Card.js';
 import MaincategoryContainer from  './Components/Maincategory-Container/Maincategory-Container.jsx'


import mainShowslider, { Showslider, LatestEpisodesShowslider } from './Components/Showslider/mainShowslider.jsx';

 import 'bootstrap/dist/css/bootstrap.min.css';
 import './index.css';

 import Footer from './Components/Footer/Footer.jsx';
 import Live_button from './Components/Live_button/Live_button.jsx';











import Mainbanner from './Components/Header/mainbackcover.png';
import Advertisment_banner from './Components/Header/homepagebanner1.png'
import Advertisment_banner2 from './Components/Header/homepagebanner2.png'


function App() {
  return (
    <div >
    <Header />

    {/* <div className="mainbanner">
          <img src={Mainbanner}/>
        </div> */}

        <div className='Mainbannerdiv'>
<img src={Mainbanner}  width='100%'/>

    <div className="Mainbannerdivcard" >
    <Mainbanner_Card/>
</div>
</div>
<div className="Advertisment">
<img src={Advertisment_banner} width="100%" />

</div>





<div className="Maincategory-Container">
<MaincategoryContainer/>
</div>
        

<div className="Showslider">
<Showslider/>
</div>

<div className="Maincategory-Container">
<MaincategoryContainer/>
</div>

<div className="Showslider">
<LatestEpisodesShowslider/>
</div>

<div className="Maincategory-Container">
<MaincategoryContainer/>
</div>
        

<div className="Showslider">
<Showslider/>
</div>

<div className="Maincategory-Container">
<MaincategoryContainer/>
</div>
        

<div className="Showslider">
<Showslider/>
</div>


<div className="Advertisment ">
<img src={Advertisment_banner2} width="100%"  />
</div>




<div className="Maincategory-Container">
<MaincategoryContainer/>
</div>
        

<div className="Showslider">
<Showslider/>
</div>


<div className="Maincategory-Container">
<MaincategoryContainer/>
</div>
        

<div className="Showslider">
<Showslider/>
</div>

<div className="Advertisment2">
<img src={Advertisment_banner} width="100%" />

</div>

<Footer/>

  </div>

  

  );
}

export default App;
