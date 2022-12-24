export function getOnlyNiceSpesificAtt(data) {
        const result = data.records.map((record) => {
                return {
                        idbase: record.fields.idbase,
                        libellefrancais: record.fields.libellefrancais,
                        genre: record.fields.genre,
                        espece: record.fields.espece,
                        circonferenceencm: record.fields.circonferenceencm,
                        hauteurenm: record.fields.hauteurenm,
                        dateplantation: record.fields.dateplantation,
                        adresse: record.fields.adresse,
                };
        });
        return result;
}

export function getArrondissement(data) {
        const arrondissement = [];
        data.records.forEach((record) => {
                arrondissement.push(record.fields.arrondissement);
        });
        return arrondissement;
}
export function deleteDuplicates(arr) {
	let seen = {};
	return arr.filter(function(item) {
	  return seen.hasOwnProperty(item) ? false : (seen[item] = true);
	});
      }