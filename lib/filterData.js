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
