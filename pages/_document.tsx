import { Html, Head, Main, NextScript } from "next/document";
import ButtonAppBar from "../components/navbar";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

export default function Document() {
  return (
    <Html lang="en">
      <CssBaseline />
      <Head />
      <body>
        <ButtonAppBar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
