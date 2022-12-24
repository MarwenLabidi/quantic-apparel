export function transformDataForBarGraph(obj) {
	let arr = [];
	for (let key in obj) {
	  arr.push({
	    Arrondissent: key,
	    TreesNumber: obj[key]
	  });
	}
	return arr;
      }