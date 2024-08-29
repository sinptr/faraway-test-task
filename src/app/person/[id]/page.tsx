import { peopleService } from "@/api/people/service";
import { PersonView } from "@/components/person/person-view";
import { Box } from "@mui/material";
import { Metadata } from "next";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: PageProps): Promise<Metadata> {
  const person = await peopleService.getById(id);

  return {
    title: `${person.name} | SW`,
  };
}

export default async function PersonPage({ params: { id } }: PageProps) {
  const person = await peopleService.getById(id);

  return (
    <Box sx={{ py: 2 }}>
      <PersonView person={person} />
    </Box>
  );
}
