"use client";

import { TextField, TextFieldProps } from "@mui/material";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, FC } from "react";
import { useDebouncedCallback } from "use-debounce";

type SearchProps = Omit<TextFieldProps, "onChange">;

export const Search: FC<SearchProps> = (props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChange = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      const search = event.target.value;

      params.delete("page");

      if (search) {
        params.set("search", event.target.value);
      } else {
        params.delete("search");
      }

      const url = params.size
        ? pathname.concat("?", params.toString())
        : pathname;

      replace(url);
    },
    300,
  );

  return <TextField onChange={onChange} {...props} />;
};
