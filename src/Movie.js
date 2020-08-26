import React from 'react';
import PropTypes from 'prop-types';

class Movie extends React.Component{

    render(){
        const {id, title, year, summary, poster} = this.props;

        return (
            <h1>{title}</h1>
            
        );
    };

};

Movie.protoTypes = [
    {
        id: PropTypes.number.isRequired,
        year: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
    }
];

export default Movie;