import { BannerContinent } from "@/components/BannerContinent";
import { ContentContinent } from "@/components/ContentContinent";
import { CountrySlidesConteiner } from "@/components/CountrySlides";
import { Header } from "@/components/Header";
import { Continent, useContinents } from "@/contexts/continentsContexts";
import { ContinentPageProps, CountryPropsFormated } from "@/interface/continentInterfaces";
import { getPrismicClient } from "@/services/prismic";
import { continentObjectFormarter, countryObjectFormarter } from "@/utils/functions";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function ContinentPage({ slug, continentFormated, countriesFormated }: ContinentPageProps) {
    const { continents } = useContinents();
    const [isShowContinent, setIsShowContinent] = useState(false);
    const [countrys, setCountrys] = useState<CountryPropsFormated[]>([]);
    const [continentSelected, setCountinentSelected] = useState<Continent>({
        uid: "",
        slug: "",
        title: "",
        subtitle: "",
        description: "",
        amount_of_countries: "",
        amount_of_languages: "",
        amount_of_cities: "",
        image_home: "",
        image_page: "",
    });

    useEffect(() => {
        setCountrys(countriesFormated)
    }, [countriesFormated]);

    useEffect(() => {
        setCountinentSelected(continentFormated)
        setIsShowContinent(true)
    }, [continentFormated]);

    return (
        <>
            <Head>
                <title>{slug ? `WORLD TRIP | ${slug[0].toLocaleUpperCase()}` : "WORLD TRIP | CONTINENTE"}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="../favicon.ico" />
            </Head>
            <main>
                <Header />
                {isShowContinent &&
                    (
                        <>
                            <BannerContinent
                                image={continentSelected?.image_page}
                                title={continentSelected?.title} />
                            <ContentContinent
                                description={continentSelected?.description}
                                countries={continentSelected?.amount_of_countries}
                                languages={continentSelected?.amount_of_languages}
                                cities={continentSelected?.amount_of_cities}
                            />

                            <CountrySlidesConteiner countrys={countrys} />
                        </>
                    )

                }
            </main>
        </>
    )
}


export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    let tags: string = "";
    if (params?.slug) {
        tags = params.slug[0] ? params.slug[0] : "";
    }
    try {
        const prismic = getPrismicClient({})
        const continents = await prismic.getAllByUIDs("continent", params?.slug as []);
        const countries = await prismic.getAllByTag(tags)
        const countriesFormated = countries.map((countrie) => {
            return countryObjectFormarter(countrie)
        });
        const continentFormated = continentObjectFormarter(continents[0])
        return {
            props: { slug: params?.slug, continentFormated, countriesFormated }
        }
    } catch (error) {
        console.log(error)
        return {
            props: { slug: params?.slug }
        }
    }


}