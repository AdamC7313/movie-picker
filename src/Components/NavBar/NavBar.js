import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className="NavHead">
                <h1>Movie Picker</h1>
                <h2>Choose an Option</h2>
                <div className="display-buttons">
                    <button className="button" id="add-movie" value='AddMovie' onClick={this.props.onFormSelect}>Add a Movie</button>
                    <button className="button" id="pick-movie" value='PickMovie' onClick={this.props.onFormSelect}>Pick a Movie</button>
                    <button className="button" id="see-movie-list" value='MovieList' onClick={this.props.onFormSelect}>See Movie List</button>
                </div>
            </div>
        )
    }
}


export default NavBar;