const endpoint = "https://restcountries.eu/rest/v2";

export const fetchCountryListAll = async () => {
    const fields = [
        "name",
        "alpha3Code",
        "population",
        "region",
        "capital",
        "flag"
    ];
    const req = `${endpoint}/all?fields=${fields.join(";")}`;
    const res = await fetch(req);

    if (!res.ok) throw new Error("Request Failed");

    const list = await res.json();

    return list;
};

export const searchCountryByName = async (string) => {
    if (string === "") throw new Error("EMPTY_STRING");

    const fields = [
        "name",
        "alpha3Code",
        "population",
        "region",
        "capital",
        "flag"
    ];
    const req = `${endpoint}/name/${string}?fields=${fields.join(";")}`;

    const res = await fetch(req);

    if (!res.ok) {
        if (res.status === 404) throw new Error("NO_MATCH");

        throw new Error("FAILED_REQUEST");
    }

    const list = await res.json();

    return list;
};

export const fetchCountryByCode = async (code, fields) => {
    const url = `${endpoint}/alpha/${code}${fields ? `&fields=${fields.join(";")}` : ""
        }`;
    const response = await fetch(url);

    if (!response.ok) return new Error("REQUEST_FAILED");

    const data = await response.json();

    return data;
};

export const fetchCountryData = (alpha3Code) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${endpoint}/alpha/${alpha3Code}`)
            .then((response) => {
                if (response.ok) return response.json();

                reject("DATA NOT FOUND");
            })
            .then((data) => {
                resolve(data);
            });
    });

    return promise;
};

export const fetchCountryBorders = (data) => {
    if (data.borders.length === 0)
        return Promise.resolve(data)
    
    const bordersAlphas = data.borders.join(";");
    const promise = new Promise((resolve, reject) => {
        if (bordersAlphas.length === 0) resolve(data);

        fetch(`${endpoint}/alpha?codes=${bordersAlphas}&fields=alpha3Code;name`)
            .then((response) => {
                if (response.ok) return response.json();

                reject("COULD NOT RETRIEVE BORDERS");
            })
            .then((borders) => {
                resolve({
                    ...data,
                    borders
                });
            });
    });

    return promise;
};
