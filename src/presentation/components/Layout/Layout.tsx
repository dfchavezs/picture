import { ReactNode } from "react";
import Header from "../Header/Header";
import {
  LayoutBodyContainer,
  LayoutContainer,
  LayoutHeaderContainer,
} from "./Layout.styled";

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <LayoutContainer>
      <LayoutHeaderContainer>
        <Header />
      </LayoutHeaderContainer>
      <LayoutBodyContainer>
        {children}
        {/* TODO: ADD FOOTER */}
      </LayoutBodyContainer>
    </LayoutContainer>
  );
}
export default Layout;
