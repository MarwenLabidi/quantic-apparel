//NOTE : write a function to filter all the trees by arrondissement(arrays of ech arondisment have his trees) and count the number(percentage) of remarquabale trees for each arrondissement
import { fetchArbreRemarquableParis } from "../../lib/fetchTreeDataTenItemPerPage";
import { getArrondissement, getTreesByLocation } from "../../lib/filterData";
import {
        getRemarquablePercentage,
        convertObjectToArrayAndAddIDandLabel,
} from "../../lib/transformData";

export default async function handler(req, res) {
        try {
                const Trees = await fetchArbreRemarquableParis();
                const arrondissement = getArrondissement(Trees);
                const treesByLocation = getTreesByLocation(
                        arrondissement,
                        Trees
                );
                const percentageOfRemarquableTreeForEachArrondissement =
                        getRemarquablePercentage(
                                treesByLocation,
                                arrondissement
                        );
                const finalResult = convertObjectToArrayAndAddIDandLabel(
                        percentageOfRemarquableTreeForEachArrondissement
                );

                if (Trees.length !== 0) {
                        res.json(finalResult);
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
