//NOTE : there is 20 arrondissements in Paris
//NOTE : write a function to filter all the trees by arrondissement(arrays of ech arondisment have his trees) and count the number(percentage) of trees for each arrondissement

import { fetchArbreRemarquableParis } from "../../lib/fetchTreeDataTenItemPerPage";
import { countTreesByArrondissement } from "../../lib/filterData";
import { transformDataForBarGraph } from "../../lib/transformData";

export default async function handler(req, res) {
        try {
                const Trees = await fetchArbreRemarquableParis();
                // write a function to count the number of trees for each arrondissement
                const treesCount = countTreesByArrondissement(Trees);
                let transformedData = transformDataForBarGraph(treesCount);

                if (Trees.length !== 0) {
                        res.json(transformedData);
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
