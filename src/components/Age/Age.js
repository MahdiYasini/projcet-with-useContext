import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

import bgImage from '../../assets/images/2.jpg';
import { UserContext } from '../../UserContext';

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
        "& label": {
            display: "block",
            marginBottom: "5px",
            fontSize: "1.9rem"
        },
        "& input": {
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            marginBottom: "10px"
        },
        "& input:focus": {
            outline: "2px dashed #ccc"
        }
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
    const { userInfo, setUserInfo } = useContext(UserContext);

    let value = 0;
    const inputChangeHandler = (event) => {
        value = event.target.value;
    }

    const buttonClickHandler = () => {
        const newUserInfo = { ...userInfo, age: value };
        setUserInfo(newUserInfo);
    }
    return (
        <>
            <div className={classes.root}>
                <div className={classes.showCase}>
                    <div className={classes.showCaseContent}>
                        <label htmlFor="input">Please Enter Your Age</label>
                        <input type="number" min="1" id="input" onChange={(event) => inputChangeHandler(event)} placeholder="Enter Your Age" />
                        <Link to="/info">
                            <button onClick={buttonClickHandler} className={classes.btn}>Next level...</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Age;