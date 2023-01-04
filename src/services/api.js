import axios from "axios";
import { pad } from "../utils";

export const getPokemonImageUrl = (id) =>
  `/thumbnails-compressed/${pad(id, 3)}.png`;

export const getPokemonImageUrl2 = (id) =>
  `/images/${pad(id, 3)}.png`;

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export default api;
