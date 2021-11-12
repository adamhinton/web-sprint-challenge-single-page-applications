import React from 'react'

export default function Pizzaform(props){
  const { values, update, submit } = props


  const onChange = evt => {
    const name = evt.target.name;
    const { value } = evt.target;
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  
   return( 
   <div className='container'>
        <h1>Lambda Eats</h1>
        <div className= 'menu'>
          <form id= 'pizza-form'> 
          <img src= 'https://th.bing.com/th/id/OIP.djlnJoe23sxS415sQi--CQHaE8?w=238&h=180&c=7&r=0&o=5&pid=1.7'></img>
          <h2>Build your own pizza</h2>
          <div>
            <h3>Choice of Size</h3>
            <p>Required</p>
          </div>
          
          <label>Choice of Sauce
            {/* 🔥 STEP 5 - Make dropdown for role. */}
            <select value={values.sauce} name="role" onChange={onChange}>
              <option value="">-- Select a Role --</option>
              <option value="Student">Student</option>
              <option value="Instructor">Instructor</option>
              <option value="Alumni">Alumni</option>
            </select>
          </label>
  
          </form>
       </div>
      </div>
   )
}