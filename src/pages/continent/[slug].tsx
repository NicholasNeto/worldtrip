
import React from "react"
import { Flex } from "@chakra-ui/react"
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom"
import { BannerContinent } from "../../components/BannerContinent";
import { ContentContinent } from "../../components/Content/content-continent";
import { Cities } from "../../components/Cities/index";

export interface InfosProps {
    countries: string;
    languages: string;
    cities: string;
}

export interface CitiesProps {
    city_image: string,
    city_flag: string,
    city_capital: string,
    city_pais: string,
}

interface ContinentProps {
    continent: {
        slug: string,
        title: string,
        description: string,
        banner_image: string,
        infos: InfosProps,
        cities: CitiesProps[]
    }
}

export default function Continent({ continent }: ContinentProps) {
    return (
        <Flex direction='column'>
            <BannerContinent bannerImage={continent.banner_image} title={continent.title} />
            <ContentContinent description={continent.description} infos={continent.infos} />
            <Cities cities={continent.cities} />
        </Flex>
    )
}

export async function getServerSideProps({ req, params }) {
    const { slug } = params;
    const prismic = getPrismicClient()
    const response = await prismic.getByUID('continent', String(slug), {})

    const dataInfos = response.data.infos[0]


    const infos = response.data.infos[0] ? Object.keys(response.data.infos[0]).reduce((acc, cur) => {
        return { ...acc, [cur]: response.data.infos[0][cur][0].text }
    }, {}) : {}
    // const infos = Object.keys(dataInfos).reduce((acc, cur) => {
    //     return { ...acc, [cur]: dataInfos[cur][0].text }
    // }, {})

    const cities = response.data.cities.map(it => {
        return {
            city_image: it.city_image.url,
            city_flag: it.city_flag.url,
            city_capital: it.city_capital[0].text,
            city_pais: it.city_pais[0].text,
        }
    })

    const continent = {
        slug,
        title: RichText.asText(response.data.title),
        description: RichText.asText(response.data.description),
        banner_image: response.data.banner_image.url || "",
        infos,
        cities
    };

    return {
        props: {
            continent,
        }
    }
}