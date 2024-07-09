import "./globals.css";
import { Mochiy_Pop_P_One } from 'next/font/google';
export const metadata = {
  title: "Contentic Media",
  description: "SEO wala bhakchodi baad me",
};

const Josef = Mochiy_Pop_P_One ({
  subsets: ['latin'],
  weight: ["400"],
  display: "swap"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </head>
      <body className={Josef.className}>{children}</body>
    </html>
  );
}
