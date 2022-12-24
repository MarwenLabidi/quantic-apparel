//NOTE : there is 20 arrondissements in Paris
//NOTE : write a function to filter all the trees by arrondissement(arrays of ech arondisment have his trees) and count the number(percentage) of trees for each arrondissement

import { fetchArbreRemarquableParis } from "../../lib/fetchTreeDataTenItemPerPage";
import { getArrondissement } from "../../lib/filterData";

export default async function handler(req, res) {
        try {
                const Trees = await fetchArbreRemarquableParis();
                //write a function to get all arrondissements from the data
		const arrondissements = getArrondissement(Trees);
                // write a function to delete duplicate value
                // write a function to count the number of trees for each arrondissement

                if (Trees.length !== 0) {
                        res.json(arrondissements);
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
