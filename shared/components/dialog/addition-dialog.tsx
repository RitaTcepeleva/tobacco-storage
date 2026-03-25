"use client";

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
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const schema = z.object({
  brand: z.string().min(1, "Required"),
  name: z.string().min(1, "Required"),
  flavour: z.enum(flavourItems.map((i) => i.value)),
  strength: z.enum(strengthItems.map((i) => i.value)),
  amount: z.coerce.number().min(1),
});

type SchemaInputT = z.input<typeof schema>;
type SchemaOutputT = z.input<typeof schema>;

export const AdditionDialog = () => {
  const { register, handleSubmit, formState, getValues, trigger, control } =
    useForm<SchemaInputT>({
      resolver: zodResolver(schema),
      defaultValues: {
        brand: "",
        name: "",
        flavour: undefined,
        strength: undefined,
        amount: 250,
      },
    });

  const onSubmit = (data: SchemaOutputT) => {
    console.log("Form Data:", data, formState.errors); // Log validated form data to the console
  };

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
          {/* <form
            onSubmit={() => {
              console.log("submit fired");
              handleSubmit(onSubmit);
            }}
          > */}
          <Fieldset.Root size="lg" as="form">
            <Fieldset.Content
              display={"grid"}
              gridTemplateColumns={"repeat(2, 1fr)"}
              gap={8}
            >
              <Field.Root invalid={!!formState.errors.brand}>
                <Field.Label>Brand</Field.Label>
                <Input
                  placeholder="e.g. Darkside"
                  variant={"outline"}
                  pl={6}
                  {...register("brand")}
                />
              </Field.Root>

              <Field.Root invalid={!!formState.errors.name}>
                <Field.Label>Flavour Name</Field.Label>
                <Input
                  placeholder="e.g. Supernova"
                  variant={"outline"}
                  pl={6}
                  {...register("name")}
                />
              </Field.Root>

              <Controller
                name={"flavour"}
                control={control}
                render={({ field, fieldState }) => (
                  <Field.Root>
                    <Field.Label>Profile Group</Field.Label>
                    <AdditionMenu
                      title="Select type"
                      items={flavourItems}
                      selectedItem={field.value}
                      onChange={field.onChange}
                      invalid={!!fieldState.error}
                    />
                  </Field.Root>
                )}
              ></Controller>

              <Controller
                name="strength"
                control={control}
                render={({ field, fieldState }) => (
                  <Field.Root>
                    <Field.Label>Strength</Field.Label>
                    <AdditionMenu
                      title="Select strength"
                      items={strengthItems}
                      selectedItem={field.value}
                      onChange={field.onChange}
                      invalid={!!fieldState.error}
                    />
                  </Field.Root>
                )}
              ></Controller>

              <Field.Root
                gridColumn={"span 2"}
                invalid={!!formState.errors.amount}
              >
                <Field.Label>Amount (Grams)</Field.Label>
                <NumberInput.Root defaultValue="250" w={"100%"}>
                  <NumberInput.Input
                    {...register("amount")}
                    css={{
                      borderColor: "border/50",
                      bg: "card/30",
                      focusVisibleRing: "inside",
                      _focusVisible: {
                        border: "none",
                        focusRingColor: "ring",
                      },
                      _invalid: {
                        borderColor: "destructive",
                      },
                    }}
                  />
                </NumberInput.Root>
              </Field.Root>
            </Fieldset.Content>

            <Button
              type="submit"
              variant="add"
              mt={15}
              mb={5}
              onClick={
                /* async () => {
                const isValid = await trigger(); // запускает валидацию
                const values = getValues();

                console.log("values:", values);
                console.log("isValid:", isValid);
                console.log("errors:", formState.errors);
              } */
                handleSubmit(onSubmit)
              }
            >
              Add to Cellar
            </Button>
          </Fieldset.Root>
          {/* </form> */}
        </ChakraDialog.Body>
      </>
    </Dialog>
  );
};
