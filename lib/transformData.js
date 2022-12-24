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


      export function getRemarquablePercentage(treesByLocation, arrondissement) {
	let result = {};
	arrondissement.forEach(arrondi => {
	    let count = 0;
	    treesByLocation[arrondi].forEach(item => {
		if(item.fields.remarquable == 'OUI'){ count++};
	    });
	    result[arrondi] = (count/treesByLocation[arrondi].length) * 100;
	});
	return result;
    }
    export function convertToDataXAndY(input) {
	let data = [{ data: [] }];
	input.forEach((obj) => {
	  data[0].data.push({ x: obj.circonferenceencm, y: obj.hauteurenm });
	});
	return data;
      }
     