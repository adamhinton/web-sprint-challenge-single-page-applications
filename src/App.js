import React, {useState, useEffect} from "react";
import Pizzaform from './pizza-form'
import axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom';
import Home from "./Home";

const initialFormValues = 
  {
    name: '',
    size: '',
    anchovies: false,
    beefjerky: false,
    goatblood: false,
    lollipops: false,
    special: '',
}

export default function App(){
  const [orders, setOrders] = useState({})

  const [formValues, setFormValues] = useState(initialFormValues);

  const [formErrors, setFormErrors] = useState("");
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

 

  return (
    <Switch>
    <Route path="/pizza">
      <Pizzaform
       values={formValues}
       update={updateForm}
      //  submit={submitForm}
       />
    </Route>

    <Route exact path="/">
      <Home
       />
    </Route>
  </Switch>
  );
};