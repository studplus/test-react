import React, {Component} from 'react';

import{ dumpLogs } from "./Utils";
import classes from "./inhalt.module.css";

class Inhalt extends Component {
    state = {
        anzahlLikes: 0
    }

    onLikeBtnClick = () => {
        this.setState((prevState, prevProp)=> {
          return {anzahlLikes: prevState.anzahlLikes + 1}
        });
    }

    render(){
        dumpLogs(this.props)
        return(
            <div className={classes.TestClass}>
                <h3>{this.props.title}</h3>
                <p>{this.props.beschreibung}</p>

                <p>Anzahl Likes: <span className={classes.AnzahlLikes}>{this.state.anzahlLikes}</span></p>
                <button onClick={this.onLikeBtnClick}>Like</button>
            </div>
        )
    }
}

export default Inhalt;