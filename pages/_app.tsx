import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { BottomSheetProvider } from "../context/BottomSheet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BottomSheetProvider>
      <Component {...pageProps} />
    </BottomSheetProvider>
    )

}

export default MyApp
