import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <h1>Movie Picker</h1>
                <h2>Choose an Option</h2>
                <div class="display-buttons">
                    <button class="button" id="add-movie">Add a Movie</button>
                    <button class="button" id="pick-movie">Pick a Movie</button>
                    <button class="button" id="see-movie-list">See Movie List</button>
                </div>
            </div>
        )
    }
}


export default NavBar;