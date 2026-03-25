import { Button, Dialog as ChakraDialog, Portal } from "@chakra-ui/react";
import { IoIosClose } from "react-icons/io";
import type { PropsWithChildren } from "react";

type DialogProps = { openTrigger: React.ReactNode } & PropsWithChildren;

export const Dialog = ({ openTrigger, children }: DialogProps) => {
  return (
    <ChakraDialog.Root placement={"center"}>
      <ChakraDialog.Trigger asChild>{openTrigger}</ChakraDialog.Trigger>
      <Portal>
        <ChakraDialog.Backdrop />
        <ChakraDialog.Positioner>
          <ChakraDialog.Content>
            {children}
            <ChakraDialog.CloseTrigger asChild>
              <Button border={"none"}>
                <IoIosClose />
              </Button>
            </ChakraDialog.CloseTrigger>
          </ChakraDialog.Content>
        </ChakraDialog.Positioner>
      </Portal>
    </ChakraDialog.Root>
  );
};
