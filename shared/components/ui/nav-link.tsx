import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { LinkProps } from "next/link";
import type { PropsWithChildren } from "react";

export const NavLink = ({ href, children }: LinkProps & PropsWithChildren) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <ChakraLink
      asChild
      _currentPage={{ color: "primaryForeground", bg: "primary" }}
    >
      <NextLink href={href} aria-current={isActive ? "page" : undefined}>
        {children}
      </NextLink>
    </ChakraLink>
  );
};
