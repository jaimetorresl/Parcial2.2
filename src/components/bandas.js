import Banda from "./banda";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BandaCard from "./bandaCard";
import {FormattedMessage} from 'react-intl';
const { useEffect, useState } = require("react");

function Bandas () {

   const [carta, setCarta] = useState([]);
   const [mascotas, setMascotas] = useState([]);
   useEffect(()=>{
       const URL = "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
       fetch(URL).then(data => data.json()).then(data => {
           setMascotas(data);
       })
   }, []);

   const createCard = (mascota, id) => {
    setCarta(mascota);
   
    };

   return(
       <div className="container">
            <div class="row">
              <div class="col">
              <table className="table" >
           <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col"> <FormattedMessage id="name"/></th>
                    <th scope="col"> <FormattedMessage id="country"/></th>
                    <th scope="col"> <FormattedMessage id="genre"/></th>
                    <th scope="col"> <FormattedMessage id="foundation"/></th>
                    </tr>
                </thead>
               {mascotas.map(mascota =>  <tr onClick={() => createCard(mascota, mascota.id)} ><Banda mascota={mascota} key={mascota.id}/></tr>)}               
           </table >
             </div>
             <div class="col">
             <BandaCard bandaCard={carta}></BandaCard>
            </div>
        </div>
           
          
            
       </div>

       
   )
}

export default Bandas;