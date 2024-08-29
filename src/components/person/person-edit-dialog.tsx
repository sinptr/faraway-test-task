"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { FC, FormEventHandler } from "react";
import { PersonEditableFields } from "@/components/person/types";

export interface PersonEditDialogProps {
  title: string;
  open: boolean;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onClose: () => void;
  fields: {
    type: "string" | "number";
    label: string;
    value: string;
    name: keyof PersonEditableFields;
  }[];
}

export const PersonEditDialog: FC<PersonEditDialogProps> = (props) => {
  const { title, onSubmit, fields, open, onClose } = props;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: "form",
        onSubmit,
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {fields.map(({ label, value, name, type }) => (
          <TextField
            key={label}
            required
            margin="dense"
            name={name}
            label={label}
            type={type}
            variant="standard"
            fullWidth
            defaultValue={value}
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit">Edit</Button>
      </DialogActions>
    </Dialog>
  );
};
