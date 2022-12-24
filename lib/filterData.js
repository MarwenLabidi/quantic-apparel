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
export function getDataCoordinateGenreLibellefrancais(data) {
        const result = data.records.map((record) => {
                return {
                        coordinates: record.geometry.coordinates,
                        genre: record.fields.genre,
                        libellefrancais: record.fields.libellefrancais,
                };
        });
        return result;
}
export function getHeightCirconferenceen(data) {
        const result = data.records.map((record) => {
                return {
                        circonferenceencm: record.fields.circonferenceencm,
                        hauteurenm: record.fields.hauteurenm,
                };
        });
        return result;
}

export function getArrondissement(data) {
        const arrondissement = [];
        let seen = {};
        data.records.forEach((record) => {
                arrondissement.push(record.fields.arrondissement);
        });
        return arrondissement.filter(function (item) {
                return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        });
}

export function countTreesByArrondissement(data) {
        let treeCountsByArrondissement = {};
        data.records.forEach((record) => {
                if (
                        treeCountsByArrondissement.hasOwnProperty(
                                record.fields.arrondissement
                        )
                ) {
                        treeCountsByArrondissement[
                                record.fields.arrondissement
                        ] += 1;
                } else {
                        treeCountsByArrondissement[
                                record.fields.arrondissement
                        ] = 1;
                }
        });
        return treeCountsByArrondissement;
}

export function getTreesByLocation(arrondissement, Trees) {
        function filterTrees(arrondissement, Trees) {
                return Trees.records.filter((tree) =>
                        arrondissement.includes(tree.fields.arrondissement)
                );
        }
        return arrondissement.reduce((acc, current) => {
                const trees = filterTrees(current, Trees);
                return {
                        ...acc,
                        [current]: trees,
                };
        }, {});
}
