import axios from "axios";

const fetchDogBreedNames = () => {
  return axios.get("https://dog.ceo/api/breeds/list/all");
};

const fetchRandomDogImage = (dog) => {
  // return axios.get(`https://dog.ceo/api/breed/${dogName}/image/random`);
  return axios.get(`https://dog.ceo/api/breed/${dog}/images/random`);
};

export const dogCeo = {
  fetchDogBreedNames,
  fetchRandomDogImage,
};
