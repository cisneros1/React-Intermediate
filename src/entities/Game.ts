import {Platform} from "../hooks/usePlatforms.ts";

export interface Game {
    id: number
    name: string
    slug: string
    description_raw: string,
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
    rating_top: number
}