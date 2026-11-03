import "./globals.css";

export const metadata = {
  title: "Portfolio | Software Engineer",
  description: "A software engineer's portfolio.",
  icons: { icon: "/znag.svg" },
};

export const viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
