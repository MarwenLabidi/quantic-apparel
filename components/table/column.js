import {format} from 'date-fns'

export const COLUMNN = [
        { Header: "idbase",accessor:"idbase" },
        { Header: "libellefrancais",accessor:"libellefrancais" },
        { Header: "genre" ,accessor:"genre" },
        { Header: "espece",accessor:"espece" },
        { Header: "circonferenceencm",accessor:"circonferenceencm" },
        { Header: "hauteurenm",accessor:"hauteurenm" },
        { Header: "dateplantation",accessor:"dateplantation",Cell:({value})=>{return format(new Date(value),'dd/MM/yyyy') } },
        { Header: "adresse",accessor:"adresse" },
];
