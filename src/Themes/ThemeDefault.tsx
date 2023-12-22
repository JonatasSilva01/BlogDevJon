import React, { ReactNode } from "react";
import { StyleSheetManager, ThemeProvider } from "styled-components";

const shouldForwardProp = (prop: string) => !prop.startsWith('backgroundurl');

interface ThemeDefaultsProps {
    children: ReactNode;
    target?: HTMLElement;
}

const theme = {

}

const ThemeDefault: React.FC<ThemeDefaultsProps> = ({ children, target }) => (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <StyleSheetManager target={target} shouldForwardProp={shouldForwardProp}>
          {children}
        </StyleSheetManager>
      </ThemeProvider>
    </React.Fragment>
  );
  
export default ThemeDefault;
