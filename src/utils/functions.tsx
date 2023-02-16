import { ContinentPropsFormated, CountryPropsFormated, UtilsFunctionContinentProps, UtilsFunctionCountryProps } from "@/interface/utilsFunctionsInterface";

export function continentObjectFormarter(continent: UtilsFunctionContinentProps): ContinentPropsFormated {
    return {
        uid: continent.uid,
        slug: continent.uid,
        title: continent.data.title[0].text,
        subtitle: continent.data.subtitle[0].text,
        description: continent.data.description[0].text,
        amount_of_countries: continent.data.amount_of_countries,
        amount_of_languages: continent.data.amount_of_languages,
        amount_of_cities: continent.data.amount_of_cities,
        image_home: continent.data?.["image-home"].url,
        image_page: continent.data?.["image-page"].url
    }
}
export function countryObjectFormarter(continent: UtilsFunctionCountryProps): CountryPropsFormated {
    return {
        uid: continent.uid,
        slug: continent.uid,
        name: continent.data.name[0].text,
        capital: continent.data.capital[0].text,
        continent: continent.data.continent[0].text,
        description: continent.data.description[0].text,
        flag: continent.data.flag[0].text,
        image: continent.data.image.url,
    }
}
