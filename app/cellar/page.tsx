import { CellarCard } from "@/shared/components/cards";
import { Grid } from "@chakra-ui/react";
import { Header, Filters } from "./_components";
import { cellarCardItems } from "@/shared/constants";

const Cellar = () => {
  return (
    <>
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
    </>
  );
};

export default Cellar;
