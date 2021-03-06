import React from 'react';
import Inhalt from './inhalt';
import './App.css';
import {dumpLogs, isArrayEmprty as isInhaltArrayEmpty} from "./Utils";

class App extends React.Component {
  state = {
    zeigeInhalte: true
  }

  inhArr = [
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

  onLikeBtnClick = () => {
    alert('Klick erhalten');
    // this.setState((prevState, prevProp)=> {
    //   return {anzahlLikes: prevState.anzahlLikes + 1}
    // });
  }

  inhalte = isInhaltArrayEmpty(this.inhArr) ? [] : this.inhArr.map((item, pos) =>{
    return (
        <Inhalt className={'TestName'} key={pos} title={item.title}
                beschreibung={item.beschreibung} anzahlLikes={item.anzahlLikes} id={item.id}
                onLikeBtnClick={this.onLikeBtnClick}
        />
    )
  })

  onHideBtnClick = () => {
    //let geaenderterStatus = !this.state.zeigeInhalte;
    this.setState((prevState, prevProps)=>{
      return {zeigeInhalte: !prevState.zeigeInhalte}
    });
    dumpLogs(this.state.zeigeInhalte);
  }

  render(){
    dumpLogs('render called');
    return (
        <div className="App">
          <button onClick={this.onHideBtnClick}>{ this.state.zeigeInhalte ? 'Liste ausblenden' : 'Liste anzeigen' }</button>
          <br></br>
          { this.state.zeigeInhalte
            ? this.inhalte
            : null
          }
        </div>
    );
  }
}

export default App;
