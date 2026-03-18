import { CellarCard } from "@/shared/components/cards";
import { Box, Grid } from "@chakra-ui/react";
import { Header, Filters } from "./_components";
import { cellarCardItems } from "@/shared/constants";

const Cellar = () => {
  return (
    <Box padding={{ base: 12, lg: 24 }} w={"100%"} overflowY={"auto"}>
      <Header />
      <Filters />
      <Grid
        templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap={6}
        justifyItems="center"
      >
        {cellarCardItems.map(({ title, description, image, size }) => (
          <CellarCard
            key={`${title} ${description}`}
            title={title}
            description={description}
            image={image}
            size={size}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Cellar;
