"use client";

import { FC, Fragment, useState } from "react";
import { List, ListItem, ListItemText, Divider, Fab } from "@mui/material";
import { Person } from "@/api/people/model";
import { PersonCard } from "@/components/person/person-card";
import {
  PersonEditDialog,
  PersonEditDialogProps,
} from "@/components/person/person-edit-dialog";
import { PersonEditableFields } from "@/components/person/types";
import { usePersonEditableFields } from "@/components/person/hooks/use-person-editable-fields";

interface PersonViewProps {
  person: Person;
}

export const PersonView: FC<PersonViewProps> = (props) => {
  const { person } = props;

  const [open, setOpen] = useState(false);
  const [editableFields, setEditableFields] = usePersonEditableFields(person);

  const closeDialog = () => setOpen(false);
  const openDialog = () => setOpen(true);
  const onSubmit: PersonEditDialogProps["onSubmit"] = (event) => {
    event.preventDefault();

    const data = Object.fromEntries(
      new FormData(event.currentTarget).entries(),
    );
    setEditableFields(data as PersonEditableFields);
    closeDialog();
  };

  return (
    <Fragment>
      <PersonCard name={person.name} image={person.image}>
        <List>
          {editableFields.map(({ label, value }, idx) => (
            <Fragment key={label}>
              <ListItem>
                <ListItemText primary={label} secondary={value} />
              </ListItem>
              {idx < editableFields.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </PersonCard>
      <Fab
        color="primary"
        onClick={openDialog}
        sx={{ position: "fixed", right: 16, bottom: 16 }}
      >
        Edit
      </Fab>
      <PersonEditDialog
        title={person.name}
        open={open}
        onSubmit={onSubmit}
        onClose={closeDialog}
        fields={editableFields}
      />
    </Fragment>
  );
};
