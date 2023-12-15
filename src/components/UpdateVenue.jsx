import { NavLink } from "react-router-dom";
import { useParams,useLocation } from "react-router-dom";
import Header from "./Header";
import VenueReducer from "../services/VenueReducer";
import VenuDataService from "../services/VenueDataService";
import React from "react";
import AdminButton from "./AdminButton";

const UpdateVenue = () => {
  const [venue, dispatchVenue] = React.useReducer(VenueReducer, {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  });
  const { id } = useParams();
  let location = useLocation();
 
  React.useEffect(() => {
    dispatchVenue({ type: "FETCH_INIT" });
    VenuDataService.listJsonVenues()
      .then((result) => {
        dispatchVenue({
          type: "FETCH_SUCCESS",
          payload: result.data,
        });
      })
      .catch(dispatchVenue({ type: "FETCH_FAILURE" }));
  }, [id]);
  if (venue.isSuccess){
   return(
      <div>
         <Header headerText={venue.data[id - 1].name}></Header>
     
     
       <div className="row">
        <div className="col-xs-12 col-md-10">
         <form 
         className="form-horizontal"
         id="ekle">
          <div className="form-group">
            <label className="col-xs-12 col-sm-2 control-label" >
              Mekan Adı:
            </label>
            <div className="col-xs-12 col-sm-10">
              <input  
              className="form-control"
              name="Mekanadi"
              value={venue.data[id - 1].name}
               />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-12 col-sm-2 control-label" >
              Mekan Adresi:
            </label>
            <div className="col-xs-12 col-sm-10">
              <input  
              className="form-control"
              name="adres"
              value={venue.data[id - 1].address}

               />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-12 col-sm-2 control-label" >
              İmkanlar:
            </label>
            <div className="col-xs-12 col-sm-10">
              <input  
              className="form-control"
              name="imkan"
              value={venue.data[id - 1].foodanddrink}

               />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-12 col-sm-2 control-label" >
              Enlem:
            </label>
            <div className="col-xs-12 col-sm-10">
              <input  
              className="form-control"
              name="enlem"
              value={venue.data[id - 1].coordinates[0]}

               />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-12 col-sm-2 control-label" >
              Boylam:
            </label>
            <div className="col-xs-12 col-sm-10">
              <input  
              className="form-control"
              name="boylam"
              value={venue.data[id - 1].coordinates[1]}

               />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-12 col-sm-2 control-label" >
             Günler-1:
            </label>
            <div className="col-xs-12 col-sm-10">
              <input  
              className="form-control"
              name="gunler1"
              value={venue.data[id - 1].hours[0].days}

               />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-12 col-sm-2 control-label" >
              Açılış-1:
            </label>
            <div className="col-xs-12 col-sm-10">
              <input  
              className="form-control"
              name="acilis1"
              value={venue.data[id - 1].hours[0].open}

               />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-12 col-sm-2 control-label" >
             Kapanış-1:
            </label>
            <div className="col-xs-12 col-sm-10">
              <input  
              className="form-control"
              name="kapanis1"
              value={venue.data[id - 1].hours[0].close}

               />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-12 col-sm-2 control-label" >
              Kapalı-1:
            </label>
            <div className="col-xs-12 col-sm-10 checkbox">
              <input  
              className="checkbox"
              name="kapali2"
              type="checkbox"
              value={venue.data[id - 1].name}

               />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-12 col-sm-2 control-label" >
              Günler-2:
            </label>
            <div className="col-xs-12 col-sm-10">
              <input  
              className="form-control"
              name="gunler2"
              value={venue.data[id - 1].hours[1].days}

               />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-12 col-sm-2 control-label" >
              Açılış-2:
            </label>
            <div className="col-xs-12 col-sm-10">
              <input  
              className="form-control"
              name="acilis2"
              value={venue.data[id - 1].hours[1].open}

               />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-12 col-sm-2 control-label" >
              Kapanış-2:
            </label>
            <div className="col-xs-12 col-sm-10">
              <input  
              className="form-control"
              name="kapanis2"
              value={venue.data[id - 1].hours[1].close}

               />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-12 col-sm-2 control-label" >
              KApalı-2:
            </label>
            <div className="col-xs-12 col-sm-10 checkbox">
              <input  
              className="checkbox"
              name="kapali-2"
              type="checkbox"
              value={venue.data[id - 1]}

               />
            </div>
          </div>
          
         
              
            <div className="col-xs-12 col-sm-12">
            <div className="row">
              <div className="column pull-right">
                <AdminButton
                name="mekan güncelle"
                type="primary"
                ></AdminButton>
              </div>
            </div>

             
            
          </div>

         </form>
        </div>
       </div>
    </div>
   )
  }
}

  export default UpdateVenue;