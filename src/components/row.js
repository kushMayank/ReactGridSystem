import React from 'react';
import Box from './box'
import './style.css'

const Row = (props) => {
    let column = parseInt(props.columnCount,10);
    let ele =[];
    if(column!== NaN){
        while(column > 0){
            ele.push(<Box spaceBetweenBox={props.spaceBetweenBox} />);
            column = column-1;
        }
    }
    return (    
        <div style={{ display: "flex", 'margin-bottom':`${props.spaceBetweenRows}`}}>
            {ele}
        </div>
    );
};

export default Row;