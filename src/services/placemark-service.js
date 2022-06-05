//encapsulate access to the API. New PlacemarkService class

import axios from "axios";
import { user, placemark } from "../stores";

export class PlacemarkService {

  categoryList = [];
  placemarkList = [];
  baseUrl = "";

    constructor(baseUrl) {
    this.baseUrl = baseUrl;
    const placemarkCredentials = localStorage.placemark;
    if (placemarkCredentials) {
      const savedUser = JSON.parse(placemarkCredentials);
      user.set({
        email: savedUser.email,
        token: savedUser.token,
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token,
        });
        localStorage.placemark = JSON.stringify({email: email, token: response.data.token});
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      token: "",
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("placemark");
  }

  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  }

  async addPlacemark(placemark, parsedURL) {
    try {
      const response = await axios.post(this.baseUrl + "/api/categories/" + parsedURL + "/placemarks", placemark);
      return response.status == 200;
      } catch (error) {
        return [];
      }
    }

  async getAllPlacemarks() {
    try {
      const response = await axios.get(this.baseUrl + "/api/placemarks");
      return response.data;
      } catch (error) {
        return [];
      }
    }

  async getPlacemarks(parsedURL) {
    try {
    const response = await axios.get(this.baseUrl + "/api/categories/" + parsedURL + "/placemarks");
    return response.data;
    } catch (error) {
      return [];
    }
  }

  async createCategory(title) {
    try {
      const categoryDetails = {
        title: title,
      };
      await axios.post(this.baseUrl + "/api/categories", categoryDetails);
      return true;
    } catch (error) {
      return false;
    }
  }

  async getCategories() {
    try {
      const response = await axios.get(this.baseUrl + "/api/categories");
      return response.data
    } catch (error) {
      return [];
    }
  }

  async getPlacemarkById(parsedURL) {
    try {
    const response = await axios.get(this.baseUrl + "/api/placemarks/" + parsedURL);
    placemark.set({
      id: response.data._id,
      name: response.data.name,
      latitude: response.data.latitude,
      longitude: response.data.longitude,
      amenitiesRating: response.data.amenitiesRating,
      foodRating: response.data.foodRating,
      cleanlinessRating: response.data.cleanlinessRating,
      windSpeed: response.data.windSpeed,
      // @ts-ignore
      temperature: response.data.temperature,
      feelsLike: response.data.feelsLike,
      clouds: response.data.clouds,
      windDirection: response.data.windDirection,
      visibility: response.data.visibility,
      humidity: response.data.humidity,
    });
    return response.data;
    } catch (error) {
      return [];
    }
  }

}
