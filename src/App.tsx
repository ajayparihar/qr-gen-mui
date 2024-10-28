import { ThemeProvider } from "./components/theme-provider";
import { IndexPage } from "./pages/indexPage";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <IndexPage />
    </ThemeProvider>
  );
}

export default App;
