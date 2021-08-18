import { useState, useEffect } from "react";
import {
    fetchCountryListAll,
    searchCountryByName,
    fetchCountryData,
    fetchCountryBorders
} from "../utils/restcountries";

export const useCountryList = (filter) => {
    const [state, setState] = useState({ isLoading: true, list: [] });

    useEffect(() => {
        fetchCountryListAll()
            .then((list) => setState({ isLoading: false, list }))
            .catch((err) => setState({ isLoading: false, err, list: [] }));
    }, []);

    if (filter) {
        return {...state, list: state.list.filter(filter)}
    }

    return state;
};

export const useSearch = (string, filter) => {
    const [state, setState] = useState({ isSearching: true, list: [] });

    useEffect(() => {
        searchCountryByName(string)
            .then((list) => setState({ isSearching: false, list }))
            .catch((err) => setState({ isSearching: false, err, list: [] }));
    }, [string]);

    if (filter)
        return {...state, list: state.list.filter(filter)}

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
