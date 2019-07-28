import React from 'react';
import TextField from '@material-ui/core/TextField';
import './style.css'
import Row from './row'
 
export const Container =()=>{ 
    const [values, setValues] = React.useState({
        numberOfRow: "",
        columnString: '',
        spaceBetweenRows: '',
        spaceBetweenBox: '',
        });
    
        const handleChange = (name)=>(e)=>{
            setValues({...values,[name]:e.target.value})
        }  

        let col= values.columnString.split(",");
        let element = [];
        let rowCount = values.numberOfRow;

        if(rowCount>0){
            while(rowCount > 0){
                element.push(<Row columnCount={col.shift()} spaceBetweenRows={values.spaceBetweenRows} spaceBetweenBox={values.spaceBetweenBox}/>)
                rowCount = rowCount-1
            }        
        }

    return (
        <div>
        <div className={"container"}>
            <TextField
            id="outlined-name"
            label="numberOfRow"
            className={"containerTextField"}
            value={values.numberOfRow}
            onChange={handleChange('numberOfRow')}
            margin="normal"
            variant="outlined"
            type="number"

            />
             <TextField
            id="outlined-name"
            label="columnString"
            className={"containerTextField"}
            value={values.columnString}
            onChange={handleChange('columnString')}
            margin="normal"
            variant="outlined"
            />
             <TextField
            id="outlined-name"
            label="spaceBetweenRows"
            className={"containerTextField"}
            value={values.spaceBetweenRows}
            onChange={handleChange('spaceBetweenRows')}
            margin="normal"
            variant="outlined"
            />
             <TextField
            id="outlined-name"
            label="spaceBetweenBox"
            className={"containerTextField"}
            value={values.spaceBetweenBox}
            onChange={handleChange('spaceBetweenBox')}
            margin="normal"
            variant="outlined"
            />
            
        </div>
        <div className="containerElements">
          {element}
        </div>

        </div>
    );
};



export default Container;