'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jamesl';
  const getItems = function(){
    fetch(`${BASE_URL}/items`)
    //return Promise.resolve('A successful response!');
      .then(res => res.json())
      .then(resJson => console.log(resJson)); 
  };
  const createItem = function(name) {
    let newItem = {
      name: name
    };
    
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: new Headers ({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(newItem)
    });
  };
  return{
    getItems,
    createItem,
  };
})();



