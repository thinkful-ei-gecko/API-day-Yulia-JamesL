"use strict";
/* global shoppingList, store, Item */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();

  api
    .getItems()
    .then(res => res.json())
    .then(resJson => {
      //     store.findAndUpdate(resJson.id, { name: 'foobar' }));
      // console.log('new name: ' + resJson.name);
      resJson.forEach(item => store.addItem(item));
    
      shoppingList.render();
    });
});
