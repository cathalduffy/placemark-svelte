//encapsulate access to the API. New PlacemarkService class

import axios from "axios";
import { user } from "../stores";

export class CategoryService {
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

  


}
