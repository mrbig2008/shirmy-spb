import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "ширмаспб.рф";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const imageUrl = `${protocol}://${host}/og.png`;

  return {
    title: "Ширмы СПБ — ширмы и перегородки на заказ",
    description: "Складные ширмы и интерьерные перегородки: готовые модели и индивидуальное изготовление.",
    openGraph: { title: "Ширмы СПБ", description: "Ширмы и перегородки на заказ", images: [imageUrl] },
    twitter: { card: "summary_large_image", images: [imageUrl] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
