import axios from "axios";

// put your api keys in .env file you can get those here - https://developers.google.com/youtube/v3/getting-started
export const selectRandomKey = () => {
  const keys = ["197403268303-jhflf9rivl2bl6mi4fahurtnu7vounpa.apps.googleusercontent.com, 9H9q473RdFxkr6SiSa9ARkQt, AIzaSyBQOrIXNurhz4htG_ThVh-hQGbHCSAb_8U"] //we are splitting the api keys to make an array
  const random = Math.floor(Math.random() * Math.floor(keys.length)); //this will get a random number
  return keys[random];
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    videoCategoryId: "10",
    type: "video",
    key: selectRandomKey()
  }
});
