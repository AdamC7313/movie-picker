import React from 'react';
import './PickMovieForm.css';

class PickMovieForm extends React.Component {
    render() {
        return (
            <div className="pick-movie-container">
                <form className="pick-movie-form">
                    <h3>Pick any number of genres</h3>
                    <div className="checkbox">
                        <input type="checkbox" id="action" name="action" value="action" /> 
                        <label for="action">Action</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="comedy" name="comedy" value="comedy" /> 
                        <label for="comedy">Comedy</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="romance" name="romance" value="romance" /> 
                        <label for="romance">Romance</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="sci-fi" name="sci-fi" value="sci-fi" /> 
                        <label for="sci-fi">Sci-Fi</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="thriller" name="thriller" value="thriller" /> 
                        <label for="thriller">Thriller</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="superhero" name="superhero" value="superhero" /> 
                        <label for="superhero">Superhero</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="animated-cartoon" name="animated-cartoon" value="animated-cartoon" /> 
                        <label for="animated-cartoon">Animated/Cartoon</label>
                    </div>
                    <p><strong>Watched?</strong></p>
                    <div className="radio">
                        <input type="radio" id="yes" name="watched" value="yes" /> 
                        <label for="yes">Yes</label>
                        <input type="radio"  id="no" name="watched" value="no" />
                        <label for="no">No</label>
                    </div>
                    <input className="button" id="pick-movie-button" type="submit" value="Run" />
                </form>
            </div>
        )
    }
}

export default PickMovieForm;