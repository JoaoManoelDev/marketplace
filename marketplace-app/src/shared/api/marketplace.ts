import { Platform } from "react-native";

import axios, { type AxiosInstance } from "axios";

const DEV_HOST = "192.168.15.138";

const getBaseURL = () => {
  return Platform.select({
    ios: `http://${DEV_HOST}:3001`,
    android: `http://${DEV_HOST}:3001`,
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