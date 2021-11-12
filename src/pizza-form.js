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
          
       

          <label>Size
          <select value={values.size} name="size" onChange={onChange} id='size-dropdown'>
            <option value="">-- Select a Role --</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>


        <h3>Toppings (Select 2)</h3>
        <label>Anchovies
          <input
            type='checkbox'
            name='anchovies'
            onChange={onChange}
            checked={values.anchovies}
          />
        </label>

        <label>Beef Jerky
          <input
            type='checkbox'
            name='beefjerky'
            onChange={onChange}
            checked={values.anchovies}
          />
        </label>

        
        <label>Goat Blood
          <input
            type='checkbox'
            name='goatblood'
            onChange={onChange}
            checked={values.anchovies}
          />
        </label>

        <label>Lollipops
          <input
            type='checkbox'
            name='lollipops'
            onChange={onChange}
            checked={values.anchovies}
          />
        </label>


      <h3>Special Instructions</h3>
      <label>Name
          <input
          id= 'special-text'
            type="text"
            name="name"
            value={values.specialinstructions}
            onChange={onChange}
            maxLength="50"
          />
        </label>

          <label>Name
          <input
            id= 'name-input'
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
            maxLength="30"
          />
        </label>
  
          </form>
       </div>
      </div>
   )
}