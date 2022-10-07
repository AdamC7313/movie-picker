import React from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Form from '../Form/Form';
import AddMovieForm from '../AddMovie/AddMovie';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedForm: 'null'
    }

    this.onFormSelect = this.onFormSelect.bind(this)
  }

  onFormSelect = (e) => {
    this.setState({
      selectedForm: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar onFormSelect={this.onFormSelect}/>
        <Form handleClick={this.onFormSelect} state={this.state}/>
      </div>
    );
  }
}

export default App;
