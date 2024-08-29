import { Stack, Typography, Box } from "@mui/material";
import { Metadata } from "next";
import { peopleService } from "@/api/people/service";
import { PeopleList } from "@/components/people-list";
import { Search } from "@/components/search";
import { Pagination } from "@/components/pagination";

export const metadata: Metadata = {
  title: "People | SW",
};

export default async function Home({
  searchParams: { page = "1", search = "" },
}: {
  searchParams: {
    page?: string;
    search?: string;
  };
}) {
  const people = await peopleService.getList({
    page,
    search,
  });

  return (
    <Stack
      spacing={3}
      justifyContent="space-between"
      sx={{ minHeight: "100vh", py: 4 }}
    >
      <Box>
        <Typography variant="h3" component="h1" gutterBottom>
          People
        </Typography>
        <Search
          sx={{
            width: "100%",
            maxWidth: {
              sm: 375,
            },
          }}
          name="search"
          label="Search"
          placeholder="Enter character name"
          defaultValue={search}
        />
        <PeopleList>
          {people.results.map(({ id, name, image }) => (
            <PeopleList.Item
              key={id}
              href={`/person/${id}`}
              name={name}
              image={image}
            />
          ))}
        </PeopleList>
      </Box>

      <Pagination
        page={parseInt(page)}
        count={people.pages}
        sx={{ alignSelf: "center" }}
      />
    </Stack>
  );
}
