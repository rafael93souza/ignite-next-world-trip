export interface CountryProps {
    name?: {
        common?: string,
        official?: string,
    }
    region?: string;
    subregion?: string;
    translations?: {
        por?: {
            official: string;
            common: string;
        },
    },
    capital?: string[] | null | undefined;
    flags?: {
        png?: string;
        svg?: string;
    }
}
export interface Continent {
    uid: string;
    slug: string
    title: string;
    subtitle: string;
    description: string;
    amount_of_countries: string;
    amount_of_languages: string;
    amount_of_cities: string;
    image_home: string;
    image_page: string;
}

export interface CountryPropsFormated {
    uid: string | null;
    slug: string | null;
    name: string;
    capital: string;
    description: string;
    continent: string;
    flag: string;
    image: string;
}

export interface ContinentPageProps {
    slug: string;
    continentFormated: Continent
    countriesFormated: CountryPropsFormated[] | [];
}

export interface CountrySlidesConteinerProps {
    countrys: CountryPropsFormated[] | [];
}
export interface SlidesConteinerProps {
    countrys: CountryPropsFormated[] | [];
}