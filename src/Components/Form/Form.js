import React from 'react';
import AddMovieForm from '../AddMovie/AddMovie';
import './Form.css';

class Form extends React.Component {
    showForm(param) {
        switch (param) {
            case 'AddMovie':
                return <AddMovieForm />;
            case 'PickMovie':
                return 'Pick Movie';
            case 'null':
                return 'null';
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