function dynamicSort(property) {
  // I found this function on https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value

  // I can explain what is going on after some research and testing with my data

  var sortOrder = 1; // set the original sort order

  // if the property value contains a dash then make the sort order -1
  // and reassign property with the dash removed
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  // this gets returned by the .sort method on the array of objects it is called on (filteredSpots in my case) a and b being the objects being compared, one after the other similar to a reduce function
  return function (a, b) {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

export default dynamicSort;
