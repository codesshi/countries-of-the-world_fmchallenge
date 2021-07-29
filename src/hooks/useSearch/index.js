import { useState } from "react";

export const NO_MATCH = "NO_MATCH"
export const EMPTY = "EMPTY"
export const SEARCHING = "SEARCHING"
export const OK = "OK"

const initialState = {
  status: EMPTY,
  string: "",
  results: []
}

export const useSearch = () => {
    const [state, setState] = useState(initialState);

    const search = (str) => {
        if (str === "")
            return setState({status: EMPTY, string: str, results: []})

        setState({...state, status: SEARCHING})

        fetch("https://restcountries.eu/rest/v2/name/" + str)
            .then((response) => {
                if (response.status === 404) {
                    setState({ status: NO_MATCH, string: str, results: [] })

                    return Promise.reject("NO RESULTS FOUND")
                }

                return response.json()
            })
            .then((data) => {
                setState({ status: OK, string: str, results: data })
            })
            .catch((err) => {
                console.error(err)
            })
    };

  return [state, search]
};
