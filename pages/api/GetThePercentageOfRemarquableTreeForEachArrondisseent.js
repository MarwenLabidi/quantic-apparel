
//NOTE : write a function to filter all the trees by arrondissement(arrays of ech arondisment have his trees) and count the number(percentage) of remarquabale trees for each arrondissement
import { fetchArbreRemarquableParis } from "../../lib/fetchTreeDataTenItemPerPage";
import { getArrondissement } from "../../lib/filterData";

export default async function handler(req, res) {
        try {
                const Trees = await fetchArbreRemarquableParis();
                const arrondissement = getArrondissement(Trees);

                if (Trees.length !== 0) {
                        res.json(arrondissement);
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
