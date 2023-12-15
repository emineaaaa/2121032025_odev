import React, { useState, useEffect } from "react";
import { NavLink ,useParams} from "react-router-dom";
import InputWithLabel from "./InputWithLabel";
import AdminButton from "./AdminButton";
import VenueDataService from "../services/VenueDataService";
import Header from "./Header";

function AddUpdateVenue(){



  return (
    <div>
      <Header
      headerText={"Yeni Mekan Ekle"}
    
      ></Header>
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
               />
            </div>
          </div>
          
         
              
            <div className="col-xs-12 col-sm-12">
            <div className="row">
              <div className="column pull-right">
                <AdminButton
                name="mekan ekle"
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
};

export default AddUpdateVenue;
