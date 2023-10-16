import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import axios from "axios";
import apiClient from "../Services/api-client";
import { FetchResponse } from "../Services/api-client";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => 
    apiClient
    .get<FetchResponse<Genre>>('/genres')
    .then( res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: {count: genres.length, results: genres}
})

export default useGenres;