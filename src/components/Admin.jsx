import Header from "./Header";
import VenueList from "./VenueList";
import VenueReducer from "../services/VenueReducer";
import VenueDataService from "../services/VenueDataService"; 
import React from "react";

function Admin() {

  
  const [venues, dispatchVenues] = React.useReducer(VenueReducer, {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  });
  
  
  React.useEffect(() => {
    dispatchVenues({ type: "FETCH_INIT" });
    try {
      
      VenueDataService.listJsonVenues().then((result) => {
        dispatchVenues({
          type: "FETCH_SUCCESS",
          payload: result.data,
        });
      });
    } catch {
      dispatchVenues({ type: "FETCH_FAILURE" });
    }
  }, []);
  return (
    <>
      <Header
        headerText="Yönetici"
        motto="Mekanlarınızı Yönetin!"
      />
       <VenueList venues={venues.data} admin={true} /> 

    </>
    

  );
}

export default Admin;
