import React from 'react';

class AddMovieForm extends React.Component {
    render() {
        <div>
            <form class="add-movie-form">
                <label for="movie-name"><strong>Movie name: </strong></label>
                <input type="text" id="movie-name" name="movie-name" />
                <h3>Genre: </h3>
                <div class="checkbox">
                    <input type="checkbox" id="select-all" value="Select All" /> 
                    <label for="select-all"><strong>Select All</strong></label>
                </div>
                <div class="checkbox">
                    <input type="checkbox" id="action" name="genre" value="Action" /> 
                    <label for="action">Action</label>
                </div>
                <div class="checkbox">
                    <input type="checkbox" id="comedy" name="genre" value="Comedy" /> 
                    <label for="comedy">Comedy</label>
                </div>
                <div class="checkbox">
                    <input type="checkbox" id="romance" name="genre" value="Romance" /> 
                    <label for="romance">Romance</label>
                </div>
                <div class="checkbox">
                    <input type="checkbox" id="sci-fi" name="genre" value="Sci-Fi" /> 
                    <label for="sci-fi">Sci-Fi</label>
                </div>
                <div class="checkbox">
                    <input type="checkbox" id="thriller" name="genre" value="Thriller" /> 
                    <label for="thriller">Thriller</label>
                </div>
                <div class="checkbox">
                    <input type="checkbox" id="superhero" name="genre" value="Superhero" /> 
                    <label for="superhero">Superhero</label>
                </div>
                <div class="checkbox">
                    <input type="checkbox" id="animated-cartoon" name="genre" value="Animated/Cartoon" /> 
                    <label for="animated-cartoon">Animated/Cartoon</label>
                </div>
                <p><strong>Watched?</strong></p>
                <div class="radio">
                    <input type="radio" id="yes" name="watched" value="yes" /> 
                    <label for="yes">Yes</label>
                    <input type="radio"  id="no" name="watched" value="no" />
                    <label for="no">No</label>
                </div>
                <input class="button" id="add-movie-button" type="submit" value="Add Movie" />
            </form>
        </div>
    }
}

export default AddMovieForm;