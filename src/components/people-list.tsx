import { FC, ReactNode } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";

interface PeopleListProps {
  children: ReactNode;
}

interface PeopleListItemProps {
  href: string;
  name: string;
  image: string;
}

type PeopleListComponent = FC<PeopleListProps> & {
  Item: FC<PeopleListItemProps>;
};

export const PeopleList: PeopleListComponent = ({ children }) => {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {children}
    </Grid>
  );
};

PeopleList.Item = function PeopleListItem({ name, image, href }) {
  return (
    <Card
      variant="outlined"
      component={Grid}
      size={{ xs: 6, sm: 4, md: 3, lg: 2.4 }}
      sx={{
        transition: "transform ease-in-out 0.12s",

        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea component={Link} href={href} sx={{ height: "100%" }}>
        <CardMedia sx={{ aspectRatio: "1 / 1" }} image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
