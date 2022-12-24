const createURL = (params) => {
        const baseURL = "https://opendata.paris.fr/api/records/1.0/search/";
        let url;
        if (params.start) {
                url = `${baseURL}?dataset=arbresremarquablesparis&q&rows=${params.rows}&sort=${params.sort}&facet=${params.facet}&start=${params.start}`;
        } else {
                url = `${baseURL}?dataset=arbresremarquablesparis&q&rows=${params.rows}&sort=${params.sort}&facet=${params.facet}`;
        }
        return url;
};

export const fetchArbreRemarquableParis = async (rows, start = false) => {
        try {
                const response = await fetch(
                        createURL({
                                rows,
                                start,
                                sort: "idbase",
                                facet: "libellefrancais",
                        })
                );
                const data = await response.json();
                return data;
        } catch (err) {
                console.log(err);
        }
};
