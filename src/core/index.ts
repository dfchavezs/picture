import { MOCK, REQUEST_TIMEOUT, UNSPLASH_ACCESS_KEY, UNSPLASH_URL } from "../config";
import { PhotoUseCase } from "./application/photo.useCase";
import { PhotoMockService } from "./infrastructure/mock/photo.service";
import { PhotoApiService } from "./infrastructure/services/photo.service";

/* Dependency injector */

// API service
const args = {
  baseURL: UNSPLASH_URL,
  timeout: REQUEST_TIMEOUT,
  accessKey: UNSPLASH_ACCESS_KEY,
};

const photoApiService = new PhotoApiService(args);

// MOCK service

const photoMockService = new PhotoMockService();

// Client (Mock or Api: see config.ts and .env.sample)
export const photoClient = new PhotoUseCase(MOCK ? photoMockService : photoApiService);
