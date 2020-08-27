import React, { useEffect } from 'react';

function Detail({ location, history }){
    useEffect(() => {
        if(location.state === undefined) {
            history.push('/');
        }
    }, [location, history]);
    return (
        <span>
            {location.state ? location.state.title : null}
        </span>
    );
};

export default Detail;