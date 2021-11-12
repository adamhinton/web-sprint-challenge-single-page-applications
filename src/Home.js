import React from 'react'
import { useHistory, Link } from 'react-router-dom';


export default function Home() {
    return(
        <div>
          <Link id= 'order-pizza' to='/pizza'>Order Pizza</Link>
        </div>
    )
}