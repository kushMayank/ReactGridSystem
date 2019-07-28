import React from 'react';
import './style.css'


const Box = (props) => {
    return (
        <div style={{ backgroundColor: "rgb(220,220,220)",color: "white", border: "2px solid	rgb(208, 213, 217)" , height: "100px" ,'margin-right':`${props.spaceBetweenBox}`}} >
            100px Height Box
        </div>
    );
};

export default Box;