import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js';

class App extends Component{
state = {
    persons: [
      { id: 'asfaf1', name : 'Max', age :28 },
      { id: 'adsadsa',name : 'Manu', age : 29},
      { id: 'dasdsa',name : 'Stephanie', age : 26}
    ],
    showPersons : false
}

deleteNameHandler = (personIndex) => 
{
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
}
nameChangedHandler = (event, id) =>
{  
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons : persons});
}

togglePersonHandler = () => {
   const doesShow = this.state.showPersons;
   this.setState({showPersons:!doesShow});
}


render() {
  let persons = null;
  let btnClass = '';
  if(this.state.showPersons){
    persons = <Persons
          persons = {this.state.persons}
          clicked = {this.deleteNameHandler}
          changed = {this.nameChangedHandler}/>;
    }

  

  return (
      <div className={classes.App}>
        <Cockpit 
            title = {this.props.appTitle}
            showPersons = {this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.togglePersonHandler}/>
            {persons}
      </div>
  );
  }
}


export default App ;

