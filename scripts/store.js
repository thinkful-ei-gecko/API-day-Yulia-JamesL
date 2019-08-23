'use strict';
/* global Item */
// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
    this.items.push(item);
    // try {
    //   Item.validateName(name);
    //   this.items.push(Item.create(name));
    // } catch(e) {
    //   console.log(e.message);
    // }
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

 

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };



  const findAndUpdate = function(id, newData) {
    const item = this.findById(id);
    item.checked = !item.checked;
    Object.assign(item, newData);
    api.updateItem(id, newData);
  } 

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  const alertError = function(errMessage){
    this.error = errMessage;
  }

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    error: '',

    addItem,
    findById,
    findAndDelete,
    findAndUpdate,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
    alertError
  };
  
}());
