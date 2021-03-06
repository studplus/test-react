import React from 'react';
import Inhalt from './inhalt';
import './App.css';
import {dumpLogs, isArrayEmprty as isInhaltArrayEmpty} from "./Utils";

class App extends React.Component {
  state = {
    zeigeInhalte: true,
    inhArr: [
      {
        id: 1,
        title: 'Titel 1',
        beschreibung: 'Beschreibung 1',
        anzahlLikes: 0,
      },
      {
        id: 2,
        title: 'Titel 2',
        beschreibung: 'Beschreibung 2',
        anzahlLikes: 0,
      },
      {
        id: 3,
        title: 'Titel 3',
        beschreibung: 'Beschreibung 3',
        anzahlLikes: 0,
      }
    ]
  }

  onLikeBtnClick = (pos) => {
    const updatedInhaltliste = this.state.inhArr;
    const updatedInhaltObj = updatedInhaltliste[pos];

    updatedInhaltObj.anzahlLikes = updatedInhaltObj.anzahlLikes + 1;
    updatedInhaltliste[pos] = updatedInhaltObj;

    this.setState({inhArr: updatedInhaltliste});

    //dumpLogs(updatedInhaltObj)
  }



  onHideBtnClick = () => {
    //let geaenderterStatus = !this.state.zeigeInhalte;
    this.setState((prevState, prevProps)=>{
      return {zeigeInhalte: !prevState.zeigeInhalte}
    });
    //dumpLogs(this.state.zeigeInhalte);
  }

  render(){
    //dumpLogs('render called');

    const inhalte = isInhaltArrayEmpty(this.state.inhArr) ? [] : this.state.inhArr.map((item, pos) =>{
      return (
          <Inhalt className={'TestName'} key={pos} title={item.title}
                  beschreibung={item.beschreibung} anzahlLikes={item.anzahlLikes} id={item.id}
                  onLikeBtnClick={()=>this.onLikeBtnClick(pos)} position={pos}
          />
      )
    })

    return (
        <div className="App">
          <button onClick={this.onHideBtnClick}>{ this.state.zeigeInhalte ? 'Liste ausblenden' : 'Liste anzeigen' }</button>
          <br></br>
          { this.state.zeigeInhalte
            ? inhalte
            : null
          }
        </div>
    );
  }
}

export default App;
