import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import HeadTemplate from "@/components/template/head";
import AppShell from "@/components/template/AppShell/appShell";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";



export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <HeadTemplate title={"my-web"} />
      <AppShell>
        <Component {...pageProps} />
        <ToastContainer />
      </AppShell>
    </ChakraProvider>
  );
}
