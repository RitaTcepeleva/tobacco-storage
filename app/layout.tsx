import type { Metadata } from "next";
import { Providers } from "@/providers";
import { dmSansFont, funnelDisplayFont } from "@/shared/styles/fonts";
import { FiltersProvider } from "@/shared/context";
import { HStack, Box } from "@chakra-ui/react";
import { Sidebar } from "@/shared/components/sidebar";

export const metadata: Metadata = {
  title: "Tobacco Storage",
  description: "Pet project to simplify tobacco storage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${dmSansFont.variable} ${funnelDisplayFont.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <FiltersProvider>
            <HStack h="100vh" align={"stretch"}>
              <Sidebar />
              <Box padding={{ base: 12, lg: 24 }} w={"100%"} overflowY={"auto"}>
                {children}
              </Box>
            </HStack>
          </FiltersProvider>
        </Providers>
      </body>
    </html>
  );
}
