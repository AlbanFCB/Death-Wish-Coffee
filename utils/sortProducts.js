export default function sortProducts(state, action) {
  let quantityDisplayed = state?.length;
  let sortedProducts;
  switch (action.sortOrder) {
    case "price-ascending":
      sortedProducts = [...state.sort((a, b) => a.attributes.price - b.attributes.price)];
      break;
    case "price-descending":
      sortedProducts = [...state.sort((a, b) => b.attributes.price - a.attributes.price)];
      break;
    case "created-descending":
      sortedProducts = [...state.sort((a, b) => (a.attributes.createdAt < b.attributes.createdAt ? 1 : -1))];
      break;
    case "name-ascending":
      sortedProducts = [
        ...state.sort((a, b) => (a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase() ? 1 : -1)),
      ];
      break;
    case "name-descending":
      sortedProducts = [
        ...state.sort((a, b) => (a.attributes.name.toLowerCase() < b.attributes.name.toLowerCase() ? 1 : -1)),
      ];
      break;
    case "byId":
      sortedProducts = [...action.payload?.sort((a, b) => a.id - b.id)];
      break;
    default:
      sortedProducts = state;
  }
  return { products: sortedProducts, quantityDisplayed };
}
