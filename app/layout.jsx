import "./globals.css";

export const metadata = {
  title: "Portfolio | Software Engineer",
  description: "A software engineer's portfolio.",
  icons: { icon: "/znag.svg" },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
    { media: "(prefers-color-scheme: light)", color: "#f3f2f0" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
