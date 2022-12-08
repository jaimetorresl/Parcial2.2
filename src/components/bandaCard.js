import Card from 'react-bootstrap/Card';

function BandaCard(props){
    console.log("-----------")
    console.log(props.bandaCard)
    if(props.bandaCard.name){
   return(
       <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
           <Card.Img style={{ height: '14rem' }}  variant="top" src={props.bandaCard.image} alt={props.bandaCard.descripcion} />
           <Card.Body>
               <Card.Title>{props.bandaCard.name}</Card.Title>
               <Card.Text>
                   {props.bandaCard.description}
               </Card.Text>
           </Card.Body>
       </Card>
   );
    }
    else{
        return (<p>" "</p>)
    }
}

export default BandaCard;