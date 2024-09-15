// o tema so e aplicado para os componenes doThemeProvide

import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/defalt";
import { GlobalStyle } from "./styles/global";
import Home from "./pages";
import Menu from "./components/Menu";

// import { ThemeProvider} from "styled-components"
export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Menu />
      <Home />
      <GlobalStyle/>
    </ThemeProvider>
  )
}

