import React, {useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import './HomePage.css';

export default function HomePage(){
    const [count, setCount] = useState(0);
    return(
        <div className="text-center">
            <h1 className="font-bold">You clicked {count} times</h1>
            <button className='btn btn-primary mx-1' onClick={() => setCount(count + 1)}>
                Click here!
            </button>
            <button className='btn btn-error mx-1' onClick={() => setCount(0)}>
                Reset
            </button>
        </div>

    )
}