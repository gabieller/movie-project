export type Movie = {
    id: string;
    title: string;
    vote_average: number;
    releaseDate?: string;
    overview?: string;
    poster_path?: string;
    runtime?: number
    genres?: string[]
}