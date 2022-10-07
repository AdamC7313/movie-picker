import React from 'react';
import listOfMovies from './listOfMovies';
import './MovieList.css';



function createMovieTable() {
    const table = []
    for (let i = 0; i < listOfMovies.length; i++) {
        table.push(            
        <tr>          
            <td>{listOfMovies[i].title}</td>
            <td>{listOfMovies[i].genre}</td>
            <td>{listOfMovies[i].watched}</td>
        </tr>)
    }
    return table;
} 

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
                    {createMovieTable()}          
                 </tbody>
            </table>
         </div>
        )
    }
}

export default MovieList;