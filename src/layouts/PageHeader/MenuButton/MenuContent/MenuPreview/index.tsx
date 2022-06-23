import ProductPreviewCard from "components/UI/ProductPreviewCard";
import { MenuType } from "shared/types";
import { Settings } from "react-slick";
import Carousel from "components/Carousel";
import { Box } from "@mui/material";
import { useMediaQueries } from "hooks/useMediaQueries";

interface Props {
  items: MenuType[] | undefined;
}

const MenuPreview = ({ items }: Props) => {
  const { mdDown, lgDown } = useMediaQueries();
  let slidesToShow = 3;

  if (mdDown && lgDown) {
    slidesToShow = 1;
  } else if (lgDown) {
    slidesToShow = 2;
  }

  const sliderSettings: Settings = {
    slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <Carousel
      settings={sliderSettings}
      count={items?.length}
      minSlides={slidesToShow}
    >
      {items?.map(({ id, title, imageUrl }) => (
        <Box key={id} sx={{ px: 3 }}>
          <ProductPreviewCard title={title} imgSrc={imageUrl} />
        </Box>
      ))}
    </Carousel>
  );
};

export default MenuPreview;
