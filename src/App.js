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

const initialFormErrors = {
name: ''
}

const initialDisabled = true

export default function App(){
  // const [disabled, setDisabled] = useState(initialDisabled)

  const [orders, setOrders] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues);

  const [formErrors, setFormErrors] = useState("");
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

 
  const submitForm = () => {
  const newOrder ={
    name: formValues.name.trim(),
    size: formValues.size,
    anchovies: formValues.anchovies,
    beefjerky : formValues.beefjerky,
    goatblood: formValues.goatblood,
    lollipops: formValues.lollipops,
    special: formValues.special.trim()
  }

  if(newOrder.name.length <2) {
    setFormErrors("name must be at least 2 characters");
    return;
  }

  axios.post('https://reqres.in/api/orders', newOrder)
  .then(res => {
    const dbOrder = res.data;
    setOrders([dbOrder, ...orders]);
    setFormErrors("");
    setFormValues(initialFormValues);
    console.log(orders)
  })
  .catch(err => console.error(err))
  }
  
  return (
    <Switch>
    <Route path="/pizza">
      <Pizzaform
       values={formValues}
       update={updateForm}
      //  disabled={disabled}
       submit={submitForm}
       errors = {formErrors}
       />
    </Route>

    <Route exact path="/">
      <Home
       />
    </Route>
  </Switch>
  );
};