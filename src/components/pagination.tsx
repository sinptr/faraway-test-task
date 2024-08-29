"use client";

import {
  Pagination as MUIPagination,
  PaginationItem,
  type PaginationProps,
} from "@mui/material";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FC } from "react";

export const Pagination: FC<PaginationProps> = (props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  return (
    <MUIPagination
      {...props}
      shape="rounded"
      renderItem={(item) => {
        const params = new URLSearchParams(searchParams);

        if (item.page === 1 || !item.page) {
          params.delete("page");
        } else {
          params.set("page", item.page.toString());
        }

        const href = params.size ? `${pathname}?${params}` : pathname;

        return <PaginationItem component={Link} href={href} {...item} />;
      }}
    />
  );
};
