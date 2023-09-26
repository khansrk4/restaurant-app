export function createMulitSelect(foodItem) {
  let obj = {};
  foodItem.forEach((element) => {
    obj[element.id] = false;
  });
  return obj;
}

export const setMultiSelect = (foodItem) => {
  let arr = [];
  arr = foodItem?.map((item) => ({
    active: false,
    itemID: item.id,
  }));
  return arr;
};
