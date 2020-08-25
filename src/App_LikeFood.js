import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const iLIkeFoods = [
  {
    id: 1,
    name: 'kimchi',
    images: 'https://lh3.googleusercontent.com/proxy/NHO-h90rZssJx_MJp4uWMb0bQo8_3ufmtX9pY9maBAMtyPTz5gwU7Uo8QcG7RRiP1KRkOe52cF2hDnduIc4sJfHsBV0-gWCSjpzDp6_TAcQEPGBZ',
    rating: 5
  },
  {
    id: 2,
    name: 'rice',
    images: 'https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/10/14/20191014000235_0.jpg',
    rating: 3.5
  },
  {
    id: 3,
    name: 'cake',
    images: 'https://recipe1.ezmember.co.kr/cache/recipe/2019/02/14/818f758428d4f6b882390fd24e4e2e421.jpg',
    rating: 2
  },
  {
    id: 4,
    name: 'pasta',
    images: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/12/14/2e5a56658f3abe62fa741b2958e3354e1.jpg',
    rating: 4.9
  },
];

function Food({ name, images, rating }){
  return (
    <div>
      i like {name}{name === 'pasta' ? '' : ','} <br />
      <img src={images} className="foodStyle" alt={name} /><br />
      rating : {rating}/5.0
    </div>
  );
};

Food.propTypes = {
  name: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return ( 
    <div>
      Hello!!
      <br/><br/>
      {iLIkeFoods.map( item => {
        const {name, images, id, rating} = item;
        return(
          <Food name={name} images={images} key={id} rating={rating} />
        );
      } ) }
    </div>
  );
}

export default App;