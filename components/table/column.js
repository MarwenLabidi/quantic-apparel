import { format } from "date-fns";
import ColumFilter from "./columFilter";

export const COLUMNN = [
        { Header: "idbase", accessor: "idbase", Filter: ColumFilter },
        {
                Header: "libellefrancais",
                accessor: "libellefrancais",
                Filter: ColumFilter,
        },
        { Header: "genre", accessor: "genre", Filter: ColumFilter },
        { Header: "espece", accessor: "espece", Filter: ColumFilter },
        {
                Header: "circonferenceencm",
                accessor: "circonferenceencm",
                Filter: ColumFilter,
        },
        { Header: "hauteurenm", accessor: "hauteurenm", Filter: ColumFilter },
        {
                Header: "dateplantation",
                accessor: "dateplantation",
                Cell: ({ value }) => {
                        return format(new Date(value), "dd/MM/yyyy");
                },
                Filter: ColumFilter,
        },
];
