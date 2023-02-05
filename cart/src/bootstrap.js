import faker from "faker";

const cartMessage = `<div>Current Items in Cart - ${faker.random.number()}</div>`;

document.querySelector('#dev-cart').innerHTML = cartMessage;