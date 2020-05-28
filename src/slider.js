import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
    root: {
        width: 220
    }
});



export default function RangeSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState([15000, 40000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.callbackFromParent(value)
    };
    
   

    return (
        <div className={classes.root}>

            <Slider
                min={props.min}
                max={props.max}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </div>
    );
}
