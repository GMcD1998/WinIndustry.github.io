function deleteItemsInDiv(items) {
  while (items.firstChild) items.removeChild(items.firstChild);
}

export default deleteItemsInDiv;
