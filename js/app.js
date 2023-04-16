import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";


// 1: first we connected our database link with firebase with importing initializeApp function from firebase
// 2: then we wanted to get data from our firebase with importing other function from firebase called getDatabase and then connection our app with that function
// 3: then we made reference a place we store our data in shop item verbile  for that we bring an other function from fire base called ref
// 4: then we bring an other function for pushing our data like input value in our fire base the function name is push fromfirebase
// 5: at last we pushed our input vale in our reface shop item in our firebase
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
const appSettings = {
  databaseURL:
    "https://playground-d6bb8-default-rtdb.asia-southeast1.firebasedatabase.app/",
};
const app = initializeApp(appSettings);
const database = getDatabase(app);
const shopItem = ref(database, "items");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingItemEl = document.getElementById("shopping-item-el");

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  push(shopItem, inputValue);
  clear();

  onValue(shopItem, (snapshot) => {
    let shopItemArray = Object.entries(snapshot.val());
    clearShoppingItemEl();
    for (let i = 0; i < shopItemArray.length; i++) {
      let currentItem = itemsArray[i];
      let currentItemID = currentItem[0];
      let currentItemValue = currentItem[1];
      displayShoppingItem(currentItem);
    }
  });
});

let clear = () => {
  inputFieldEl.value = "";
};

let clearShoppingItemEl = () => {
  shoppingItemEl.innerHTML = "";
};
let displayShoppingItem = (item) => {
  let itemID = item[0];
  let itemValue = item[1];
  let liEl = document.createElement("li");
  liEl.textContent = itemValue;
  shoppingItemEl.append(liEl);
  liEl.addEventListener("dblclick", () => {
    let exactLocationOfItem = ref(database, `items/${itemID}`);
    remove(exactLocationOfItem);
  });
};
