import axios, { AxiosResponse } from "axios";

// Define the type for the headers
interface RequestOptions {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
}

// Define the type for the movie data
interface MovieData {
  // Add any relevant properties based on the actual response structure
}

const options: RequestOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjE1M2ZiM2VlNTZkZjZmMmFkNTllMDk0OTUwNzVkNSIsInN1YiI6IjY1Mjk5NzljZjI4ODM4MDBmZjU4ZjFkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5sNBGBZUJwEHqbwjENWRim-bsn-vrKffEmVTpzKF-20'
  }
};

export const fetchDataTopRated = async (): Promise<MovieData> => {
  try {
    const response: AxiosResponse<MovieData> = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
    return response.data;
  } catch (error) {
    console.error("Error fetching top-rated data:", error);
    throw error;
  }
};

export const fetchDataAdventureMovie = async (): Promise<MovieData> => {
  try {
    const response: AxiosResponse<MovieData> = await axios.get('https://api.themoviedb.org/3/discover/movie?with_genres=12&language=en-US&page=1', options);
    return response.data;
  } catch (error) {
    console.error("Error fetching adventure movie data:", error);
    throw error;
  }
};

export const fetchDataHorrorMovie = async (): Promise<MovieData> => {
  try {
    const response: AxiosResponse<MovieData> = await axios.get('https://api.themoviedb.org/3/discover/movie?with_genres=27&language=en-US&page=1', options);
    return response.data;
  } catch (error) {
    console.error("Error fetching horror movie data:", error);
    throw error;
  }
};
