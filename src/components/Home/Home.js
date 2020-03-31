import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Route, Switch, Link } from 'react-router-dom'

import Age from '../Age/Age';
import Info from '../Info/Info';

import bgImage from '../../assets/images/1.jpg';

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
        background: "#ccc",
        "&:hover": {
            cursor: "pointer",
            background: "lightBlue",
            outline: "none"
        }
    }
});

const Home = () => {
    const [userInfo, setUserInfo] = useState({ name: '', age: 0 });
    const classes = useStyles();

    let value = '';
    const inputChangeHandler = (event) => {
        value = event.target.value;
    };

    const buttonClickHandler = () => {
        const newUserInfo = { ...userInfo, name: value };
        setUserInfo(newUserInfo);
    };

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <div className={classes.root}>
                        <div className={classes.showCase}>
                            <div className={classes.showCaseContent}>
                                <label htmlFor="input">Please Enter Your Name</label>
                                <input id="input" onChange={(event) => inputChangeHandler(event)} placeholder="Enter Your Name" />
                                <Link to="/age">
                                    <button className={classes.btn} onClick={buttonClickHandler}>
                                        Next Step...
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Route>
                <UserContext.Provider value={{ userInfo, setUserInfo }}>
                    <Route path="/age" exact component={Age} />
                    <Route path="/info" exact component={Info} />
                </UserContext.Provider>
            </Switch>
        </>
    );
};

export default Home;