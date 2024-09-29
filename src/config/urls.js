export const BASE_URL = "https://bored-api.appbrewery.com";
export const CORS_ANYWHERE_URL = "https://cors-anywhere.herokuapp.com/";

export const GET_RANDOM_ACTIVITY_URL = `${BASE_URL}/random`; 
export const getActivityByTypeUrl = (type) => type ? `${BASE_URL}/filter?type=${type}`: ""; 
