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

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  push(shopItem, inputValue);
  console.log(inputValue);
});
