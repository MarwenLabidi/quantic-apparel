
//NOTE : use start query parameter to get the next page of data (pagination) 10 items per page
// http://localhost:3000/api/GetLesArbresRemarquablesData?rows=10&start=1

import { fetchArbreRemarquableParis } from "../../lib/fetchTreeDataTenItemPerPage";


export default async function handler(req, res) {
  const {rows, start } = req.query;

  try {
    if (rows) {
      const Trees = await fetchArbreRemarquableParis(rows,start);
     // TODO write a function to filter  only the data we need : ibase,libbellfrancais,genre,espee,hauteur, circonference,adresse,date planation


      if (Trees.length !== 0) {
        res.json(Trees);
      } else {
        res.json({ message: `page could not be found` });
      }
    } else {
      res.status(400);
      res.json({ message: "next param is missing" });
    }
  } catch (error) {
    res.status(500);
    res.json({ message: "Something went wrong", error });
  }
}
