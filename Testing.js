const fetch = require("node-fetch");
import { Credentials } from "./Screens/Credentials";

const spotify = Credentials();

fetch("https://accounts.spotify.com/api/token", {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization:
      "Basic " + base64.encode(spotify.ClientId + ":" + spotify.ClientSecret),
  },
  data: "grant_type=client_credentials",
  method: "POST",
}).then((tokenResponse) => {
  setToken(tokenResponse.data.access_token);

  fetch(
    "https://api.spotify.com/v1/browse/new-releases?country=SE&offset=0&limit=20",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + tokenResponse.data.access_token,
      },
    }
  ).then((genreResponse) => {
    console.log(genreResponse.data);
    // setGenres(genreResponse.data.categories.items);
  });
});
