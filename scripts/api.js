'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jamesl';

  function listApiFetch(...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          // Valid HTTP response but non-2xx status - let's create an error!
          error = { code: res.status };
        }
  
        // In either case, parse the JSON stream:
        return res.json();
      })
  
      .then(data => {
        // If error was flagged, reject the Promise with the error object
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
  
        // Otherwise give back the data as resolved Promise
        return data;
      })
  }


  const getItems = function(){
    return fetch(`${BASE_URL}/items`)
  };
  const createItem = function(name) {
    let newItem = JSON.stringify({
      name: name
    });
    
    return listApiFetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newItem
    });
    
  };
  const updateItem = function(id, updateData){
    return listApiFetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData)
    });
  };
  const deleteItem = function(id) {
    return fetch(`${BASE_URL}/items/${id}`,{
      method: 'DELETE'
    });
  };
 
  

  return{
    listApiFetch,
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
})();



