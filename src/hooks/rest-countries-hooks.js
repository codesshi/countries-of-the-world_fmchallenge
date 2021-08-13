import { useState, useEffect } from "react";
import {
    fetchCountryListAll,
    searchCountryByName,
    fetchCountryData,
    fetchCountryBorders
} from "../utils/restcountries";

export const useCountryList = () => {
    const [state, setState] = useState({ isLoading: true });

    useEffect(() => {
        fetchCountryListAll()
            .then((list) => setState({ isLoading: false, list }))
            .catch((err) => setState({ err }));
    }, []);

    return state;
};

export const useSearch = (string) => {
    const [state, setState] = useState({ isSearching: true });

    useEffect(() => {
        searchCountryByName(string)
            .then((list) => setState({ isSearching: false, list }))
            .catch((err) => setState({ err }));
    }, [string]);

    return state;
};

const pipe = (data) => Promise.resolve(data);

export const useCountryDetails = (alpha3Code) => {
    const [state, setState] = useState({ status: "LOADING" });

    useEffect(() => {
        setState({status: "LOADING"})
        pipe(alpha3Code)
            .then(fetchCountryData)
            .then(fetchCountryBorders)
            .then((data) => setState({ status: "OK", data }))
            .catch((err) => setState({ status: "ERR", err }));
    }, [alpha3Code]);

    return state;
};
