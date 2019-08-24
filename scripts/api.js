'use strict';
// eslint-disable-next-line no-unused-vars

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
      });
  }


  const getItems = function(){
    return listApiFetch(BASE_URL + '/items');
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
    const newData = JSON.stringify(updateData);
    return listApiFetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newData
    });
  };

  const deleteItem = function(id) {
    return listApiFetch(`${BASE_URL}/items/${id}`,{
      method: 'DELETE'
    });
  };
 
  
  return{
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };
}());