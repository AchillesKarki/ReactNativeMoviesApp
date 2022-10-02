import axios from 'axios';
import qs from 'qs';

import { API_KEY, BASE_URL } from './api-config';

let params = {
  api_key: API_KEY,
  page: 2,
};

const axiosInstance = axios.create({
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
});

/**
 * fetches the movies from the API according to the type
 * @param {string} type the movie type
 * @returns the movies
 */
export const getMovies = async (type) => {
  const url = BASE_URL + 'movie/' + type;

  try {
    const response = await axiosInstance.get(url, { params });

    return response.data.results;
  } catch (error) {
    throw error;
  }
};

/**
 * fetches single movie by ID
 * @param {string} movieId the movie ID
 * @returns the single movie details
 */
export const getMovieById = async (movieId) => {
  const url = BASE_URL + 'movie/' + movieId;

  try {
    const response = await axiosInstance.get(url, { params });

    return response.data;
  } catch (err) {
    throw err;
  }
};

/**
 * fetches the TV shows from the API according to the type
 * @param {string} type the TV show type
 * @returns the TV shows
 */
export const getTvShows = async (type) => {
  const url = BASE_URL + 'tv/' + type;

  try {
    const response = await axiosInstance.get(url, { params });

    return response.data.results;
  } catch (error) {
    throw error;
  }
};

/**
 * fetches single TV show by ID
 * @param {string} tvID the TV show ID
 * @returns the single TV show details
 */
export const getTvShowById = async (tvID) => {
  const url = BASE_URL + 'tv/' + tvID;

  try {
    const response = await axiosInstance.get(url, { params });

    return response.data;
  } catch (err) {
    throw err;
  }
};

/**
 * fetches single person by ID
 * @param {string} personID the person ID
 * @returns the single person details
 */
export const getPersonById = async (personID) => {
  const url = BASE_URL + 'person/' + personID;

  try {
    const response = await axiosInstance.get(url, { params });

    return response.data;
  } catch (err) {
    throw err;
  }
};

/**
 * fetches movies/TV shows according to type and search query
 * @param {string} type the movie type
 * @param {string} query the search query
 * @returns the search details
 */
export const getSearchResults = async (type, query) => {
  const url = BASE_URL + `search/${type}/`;

  try {
    params = {
      ...params,
      query,
    };

    const response = await axiosInstance.get(url, { params });

    return response.data;
  } catch (err) {
    throw err;
  }
};
