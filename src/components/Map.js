import React from 'react';
import GoogleMapReact from 'google-map-react';

 /*global google*/

 const Map = () =>{

    const mapCenter = {
        lat: -3.745,
        lng: -38.523
      };
      
     return (

         <div style={{width:'100%', height: '70vh'}}>

            <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek' }}
                    center={mapCenter}
                    defaultZoom={15}
                    >      
            </GoogleMapReact>
         </div>
      
     )
 }

  export default Map;