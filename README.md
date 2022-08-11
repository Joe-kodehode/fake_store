Welcome to Fake Store!

In this project I have two pages, store and cart.

In the store page data is taken from an API (https://fakestoreapi.com) and mapped out on the page in cards. The item's image, name, and price as well as an "add to cart" button is contained in each card.

When an item is added to the cart, it's data gets stored in local storage (in a future update, global storage).

In the cart page, the data is taken from local storage and mapped into cards to display the user's current cart. The "add to cart" button is repurposed as a "delete" (remove from cart) button. Styling for the cards is also altered to better represent a typical online shopping cart.

Future updates to implement:

- global state for cart contents instead of local storage.
- cart amount displayed on cart button.
- 4.5. total price of current cart displayed on store page.
- individual page for each item when clicked, showing more info on item.
- remove-all button in cart.
- "- & +" in cart to increase/decrease amount.
- filter store page products by category.
