import {writable} from "svelte/store";

export const user = writable({
  email: "",
  token: "",
});

export const category = writable({
  id: "",
  title: "",
  parsedURL: "",
});

export const placemark = writable({
  id: "",
  name: "",
  latitude: "",
  longitude: "",
  amenitiesRating: "",
  foodRating: "",
  cleanlinessRating: "",
});
