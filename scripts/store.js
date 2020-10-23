

import item from './item.js';

const store = {
    items: [],
    hideCheckedItems: false
  };


const items = store.items
const hideCheckedItems = store.hideCheckedItems

function findById(id) {
    return items.find(item => item.id === id);
};

function addItem(name) {
    try {
        item.validateName(name);
        this.items.push(item.create(name));
    }
    catch (error){
        console.log(`${error.message}`)
    }
}


function findAndDelete(id) {
    let index = this.items.findIndex((item) => item.id === id);
    this.items.splice(index, 1);
}

function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
}


export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndDelete,
    toggleCheckedFilter
  };
  

