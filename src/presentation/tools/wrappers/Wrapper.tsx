import { QueryClientProvider } from "@tanstack/react-query";
import { PrimeReactProvider } from "primereact/api";
import { ReactNode } from "react";
import ThemeWrapper from "./ThemeWrapper";
import LangWrapper from "./LangWrapper";
import { queryClient } from "../../api/query.client";
import { BrowserRouter } from "react-router-dom";

interface IWrapperProps {
  children: ReactNode;
}

function Wrapper({ children }: IWrapperProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider>
        <ThemeWrapper>
          <LangWrapper>
            <BrowserRouter>{children}</BrowserRouter>
          </LangWrapper>
        </ThemeWrapper>
      </PrimeReactProvider>
    </QueryClientProvider>
  );
}

export default Wrapper;
