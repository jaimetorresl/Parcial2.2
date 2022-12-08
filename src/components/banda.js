function Banda(props){


   
   return(
        <>
       
        <td scope="col">{props.mascota.id}</td>
        <td scope="col">{props.mascota.name}</td>
        <td scope="col">{props.mascota.country}</td>
        <td scope="col">{props.mascota.genre}</td>
        <td scope="col">{props.mascota.foundation_year}</td>
        </>
       
   );
}

export default Banda;