import { Dialog } from "./default-dialog";
import { AdditionMenu } from "../ui";
import {
  Dialog as ChakraDialog,
  Button,
  Fieldset,
  Field,
  Input,
  NumberInput,
} from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import { flavourItems, strengthItems } from "@/shared/constants";

export const AdditionDialog = () => {
  return (
    <Dialog
      openTrigger={
        <Button variant={"add"} size={"xl"} width={"100%"}>
          {<GoPlus />}Add New Jar
        </Button>
      }
    >
      <>
        <ChakraDialog.Header mb={3}>
          <ChakraDialog.Title>Log New Tobacco</ChakraDialog.Title>
        </ChakraDialog.Header>
        <ChakraDialog.Body>
          <Fieldset.Root size="lg">
            <Fieldset.Content
              display={"grid"}
              gridTemplateColumns={"repeat(2, 1fr)"}
              gap={8}
            >
              <Field.Root>
                <Field.Label>Brand</Field.Label>
                <Input
                  name="brand"
                  placeholder="e.g. Darkside"
                  variant={"outline"}
                  pl={6}
                />
              </Field.Root>
              <Field.Root>
                <Field.Label>Flavour Name</Field.Label>
                <Input
                  name="brand"
                  placeholder="e.g. Supernova"
                  variant={"outline"}
                  pl={6}
                />
              </Field.Root>
              <Field.Root>
                <Field.Label>Profile Group</Field.Label>
                <AdditionMenu
                  title="Select type"
                  items={flavourItems}
                  filter="flavour"
                />
              </Field.Root>
              <Field.Root>
                <Field.Label>Strength</Field.Label>
                <AdditionMenu
                  title="Select strength"
                  items={strengthItems}
                  filter="strength"
                />
              </Field.Root>
              <Field.Root gridColumn={"span 2"}>
                <Field.Label>Amount (Grams)</Field.Label>
                <NumberInput.Root defaultValue="250" w={"100%"}>
                  <NumberInput.Input
                    css={{
                      borderColor: "border/50",
                      bg: "card/30",
                      focusVisibleRing: "inside",
                      _focusVisible: { border: "none", focusRingColor: "ring" },
                    }}
                  />
                </NumberInput.Root>
              </Field.Root>
            </Fieldset.Content>

            <Button type="submit" variant="add" mt={15} mb={5}>
              Add to Cellar
            </Button>
          </Fieldset.Root>
        </ChakraDialog.Body>
      </>
    </Dialog>
  );
};
