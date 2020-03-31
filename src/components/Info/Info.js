import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

import bgImage from '../../assets/images/3.jpg';

const useStyles = makeStyles({
    root: {
        background: `#ccc url(${bgImage}) no-repeat center center/cover`,
        height: "100vh",
        color: "#fff"
    },
    showCase: {
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    showCaseContent: {
        backdropFilter: "blur(4px) contrast(.9)",
        borderRadius: "10px",
        padding: "3.5rem",
        textAlign: "center",
        "& h3": {
            display: "block",
            marginBottom: "5px",
            fontSize: "1.9rem"
        },
    },
    btn: {
        padding: "1.3rem",
        borderRadius: "5px",
        border: "none",
        "&:hover": {
            cursor: "pointer",
            background: "lightBlue",
            outline: "none"
        }
    }
});

const Age = () => {
    const classes = useStyles();

    let value = ''
    const inputChangeHandler = (event) => {
        value = event.target.value;
    }

    const buttonClickHandler = () => {
        console.log('value', value)
    }
    return (
        <>
            <div className={classes.root}>
                <div className={classes.showCase}>
                    <div className={classes.showCaseContent}>
                        <h3 htmlFor="input">Hello user</h3>
                        <h3 htmlFor="input">You are ,,,, years old</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Age;