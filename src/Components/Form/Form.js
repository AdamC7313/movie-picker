import React from 'react';
import AddMovieForm from '../AddMovie/AddMovieForm';
import PickMovieForm from '../Pick a Movie/PickMovieForm';
import MovieList from '../MovieList/MovieList';
import './Form.css';


class Form extends React.Component {
    showForm(param) {
        switch (param) {
            case 'AddMovie':
                return <AddMovieForm />;
            case 'PickMovie':
                return <PickMovieForm />;
            case 'MovieList':
                return <MovieList />;
        }
    }

    render() {
        return (
            <div>
                {this.showForm(this.props.state.selectedForm)}
            </div>
        )
    }
}

export default Form;