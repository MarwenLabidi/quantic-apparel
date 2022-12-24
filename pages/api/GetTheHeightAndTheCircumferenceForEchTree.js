import { fetchArbreRemarquableParis } from "../../lib/fetchTreeDataTenItemPerPage";
import { getHeightCirconferenceen } from "../../lib/filterData";

export default async function handler(req, res) {
        try {
                const Trees = await fetchArbreRemarquableParis();
                const filtredAtt = getHeightCirconferenceen(Trees);

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
