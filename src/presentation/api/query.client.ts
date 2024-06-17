import { keepPreviousData, QueryClient } from "@tanstack/react-query";
import { MOCK } from "../../config";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: 5000,
      staleTime: MOCK ? Infinity : 10 * 1000, // Mock = any data
      placeholderData: keepPreviousData,
      throwOnError: (): boolean => {
        // TODO: Add toast
        return false;
      },
    },
    mutations: {
      retry: 3,
      retryDelay: 500,
      throwOnError: (): boolean => {
        // TODO: Add toast
        return false;
      },
    },
  },
});
