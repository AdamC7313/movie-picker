import React from 'react';
import './MovieList.css';

class MovieList extends React.Component {
    render() {
        return(
            <div className="movie-table">
            <table>
            <thead>
                <th>TITLE</th>
                <th>GENRE</th>
                <th>WATCHED?</th>
            </thead>
            <tbody>
                <tr>
                    <td>test movie 1</td>
                    <td>Comedy</td>
                    <td>No</td>
                </tr>
            </tbody>
        </table>
        </div>
        )
    }
}

export default MovieList;