import { PrismicDocument } from "@prismicio/types"
export interface ContinentPropsFormated {
    uid: string | null;
    slug: string | null;
    title: string;
    subtitle: string;
    description: string;
    amount_of_countries: string;
    amount_of_languages: string;
    amount_of_cities: string;
    image_home: string;
    image_page: string;
}
export interface UtilsFunctionContinentProps extends PrismicDocument { }

