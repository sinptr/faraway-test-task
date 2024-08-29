"use client";

import { FC, ReactNode } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

interface PersonCardProps {
  name: string;
  image: string;
  children?: ReactNode;
}

export const PersonCard: FC<PersonCardProps> = (props) => {
  const { name, image, children } = props;

  return (
    <Card variant="outlined">
      <CardContent>
        <CardMedia
          image={image}
          sx={{
            aspectRatio: "1 / 1",
            width: 256,
            mx: "auto",
            borderRadius: 4,
          }}
        />
        <Typography
          align="center"
          gutterBottom
          variant="h3"
          component="h1"
          sx={{ mt: 2 }}
        >
          {name}
        </Typography>

        <Divider />

        {children}
      </CardContent>
    </Card>
  );
};
