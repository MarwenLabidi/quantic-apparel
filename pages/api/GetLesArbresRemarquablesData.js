//NOTE : use start query parameter to get the next page of data (pagination) 10 items per page
// http://localhost:3000/api/GetLesArbresRemarquablesData?rows=10&start=1

import { fetchArbreRemarquableParis } from "../../lib/fetchTreeDataTenItemPerPage";
import { getOnlyNiceSpesificAtt } from "../../lib/filterData";

export default async function handler(req, res) {

        try {
                        const Trees = await fetchArbreRemarquableParis();
                        // TODO write a function to filter  only the data we need : ibase,libbellfrancais,genre,espee,hauteur, circonference,adresse,date planation
                        const filtredAtt = getOnlyNiceSpesificAtt(Trees);

                        if (Trees.length !== 0) {
                                res.json(filtredAtt);
                        } else {
                                res.json({
                                        message: `page could not be found`,
                                });
                        }
                
        } catch (error) {
                res.status(500);
                res.json({ message: "Something went wrong", error });
        }
}
