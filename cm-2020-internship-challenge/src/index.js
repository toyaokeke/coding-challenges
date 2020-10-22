import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j].menuOrder < arr[j - 1].menuOrder) {
        // Compare items
        const temp = arr[j - 1]; // Create a temporary integer to store value 1
        arr[j - 1] = arr[j]; // Swap value 1 to value 2
        arr[j] = temp; // Swap value 2 to value 1
      }
    }
  }
};

const groupBy = (key) => (array) =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const groupedItems = groupBy("type")(menuItems);

const sortGroupedList = (groups) => {
  for (const key in groups) {
    bubbleSort(groups[key]);
  }
  return groups;
};

const sortedGroups = sortGroupedList(groupedItems);

const render = (template, node) => {
  if (!node) return;
  node.innerHTML += template;
};

const displayMenu = (menu) => {
  for (const key in menu) {
    for (let i = 0; i < menu[key].length; i++) {
      render(
        `<ul>
          ${menu[key][i].spicy ? '<li class="spicy"></li>' : ""}
          <li>Name: ${menu[key][i].name}</li>
          <li>Description: ${menu[key][i].description}</li>
          <li>Price: $${menu[key][i].price.toFixed(2)}</li>
        </ul>`,
        document.querySelector(`#${key}`)
      );
    }
  }
};

displayMenu(sortedGroups);
