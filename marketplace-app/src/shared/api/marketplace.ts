import { Platform } from "react-native";

import axios, { type AxiosInstance } from "axios";

const getBaseURL = () => {
  return Platform.select({
    ios: "http://localhost:3000",
    android: "http://192.168.15.138:3000",
  });
}

const baseUrl = getBaseURL();

// Debug: URL que está sendo usada
if (__DEV__) {
  console.log("[API] Base URL:", baseUrl);
}

export class MarketplaceApiClient {
  private instance: AxiosInstance;
  
  constructor() {
    this.instance = axios.create({
      baseURL: baseUrl,
    });
  }

  getInstance() {
    return this.instance;
  }
}

export const marketplaceApiClient = new MarketplaceApiClient().getInstance();