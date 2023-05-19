import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/Layout/main";
import theme from "@/lib/theme.js";
import Fonts from "@/components/fonts";
import Footer from "@/components/footer";
import { createContext, useState } from "react";

interface TabContextProps {
  selectedTab: number;
  selectTab: (index: number) => void;
}

export const TabContext = createContext<TabContextProps | undefined>(undefined);

const App = ({ Component, pageProps, router }: AppProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const selectTab = (index: number) => {
    setSelectedTab(index);
  };

  const tabContextValue: TabContextProps = {
    selectedTab,
    selectTab,
  };

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <TabContext.Provider value={tabContextValue}>
          <Component {...pageProps} key={router.route} />
          <Footer />
        </TabContext.Provider>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
