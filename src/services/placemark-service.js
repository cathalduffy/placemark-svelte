//encapsulate access to the API. New PlacemarkService class

import axios from "axios";
import { identity } from "svelte/internal";
import { user, category, placemark } from "../stores";

export class PlacemarkService {
  baseUrl = "";
  categoryList = [];
  placemarkList = [];

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

  async addPlacemark(placemark) {
    try {
      const response = await axios.post(this.baseUrl + "/api/categories/" + placemark.category + "/placemarks", placemark);
      return response.status == 200;
    } catch (error) {
      return false;
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
    });
    return response.data;
    } catch (error) {
      return [];
    }
  }

}
