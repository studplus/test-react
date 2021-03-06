import React from 'react';

import{ dumpLogs } from "./Utils";
import classes from "./inhalt.module.css";

const Inhalt = (props) => {

    dumpLogs(props);
    return(
        <div className={classes.TestClass}>
            <h3>{props.title}</h3>
            <p>{props.beschreibung}</p>

            <p>Anzahl Likes: <span className={classes.AnzahlLikes}>{props.anzahlLikes}</span></p>
            <button onClick={props.onLikeBtnClick}>Like</button>
        </div>
    )
}

export default Inhalt;