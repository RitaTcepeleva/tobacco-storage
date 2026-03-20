import { Heading, Carousel } from "@chakra-ui/react";
import { RecentlyAcquiredCard } from "@/shared/components/cards";
import { cellarCardItems } from "@/shared/constants";

export const RecentlyAcquiredCards = () => {
  return (
    <section>
      <Heading pb={8} mb={8} borderBlockEnd={"1px solid {colors.border}"}>
        Recently Acquired
      </Heading>
      <Carousel.Root
        slideCount={cellarCardItems.length}
        autoSize={true}
        style={{ maxWidth: "auto" }}
      >
        <Carousel.ItemGroup paddingBlockEnd={20}>
          {cellarCardItems.map((item, index) => (
            <Carousel.Item index={index} key={index} w={"auto"}>
              <RecentlyAcquiredCard
                title={item.title}
                description={item.description}
                image={item.image}
                tags={item.tags}
                size={item.size}
              />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>
      </Carousel.Root>
    </section>
  );
};
