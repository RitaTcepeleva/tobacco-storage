import { Grid } from "@chakra-ui/react";
import { StatisticCard } from "@/shared/components/cards";
import { Header, RecentlyAcquiredCards } from "./_components";
import { statisticCardItems } from "@/shared/constants";

export default async function Page() {
  return (
    <>
      <Header />

      <Grid
        templateColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
        gap={5}
        mb={20}
      >
        {statisticCardItems.map((item) => (
          <StatisticCard
            key={`${item.title} ${item.description}`}
            title={item.title}
            description={item.description}
            caption={item.caption}
          >
            {item.children}
          </StatisticCard>
        ))}
      </Grid>

      <RecentlyAcquiredCards />
    </>
  );
}
