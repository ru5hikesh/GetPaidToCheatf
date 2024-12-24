"use client";

import { Icon } from "@iconify/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Payment } from "./columns";
import styles from "./table.module.scss";

export function DataTable({
  data,
  columns,
}: {
  data: Payment[];
  columns: ColumnDef<Payment>[];
}) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const pageNumberArr = [1, 2, 3, 4, 15, 16];

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tablewrapper}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup, id) => (
              <TableRow
                key={id}
                className="border-none bg-transparent hover:bg-transparent"
              >
                {headerGroup.headers.map((header, id) => {
                  return (
                    <TableHead key={id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, id) => (
                <TableRow
                  className="border-[#242424] hover:bg-foreground/5"
                  key={id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell, id) => (
                    <TableCell key={id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* <div className="w-full flex flex-row items-center gap-6 justify-end">
        <p className="text-[#958E86] text-sm font-medium">Page 1 of 10</p>
        <div className="flex flex-row items-center gap-4">
          <Button
            variant="default"
            onClick={() => table.nextPage()}
            className="w-8 h-8 p-0 bg-primary/20 border-none rounded-[4px]"
          >
            <Icon
              icon="material-symbols:keyboard-double-arrow-left-rounded"
              className="text-foreground/50 text-[12px] group-hover:text-[#21407d7e]"
            />
          </Button>
          <Button
            variant="default"
            onClick={() => table.nextPage()}
            className="w-8 h-8 p-0 bg-primary/20 border-none rounded-[4px]"
          >
            <Icon
              icon="iconoir:nav-arrow-left"
              className="text-foreground/50 text-[12px] group-hover:text-[#21407d7e]"
            />
          </Button>
          <Button
            variant="default"
            onClick={() => table.nextPage()}
            className="w-8 h-8 p-0 bg-primary border-none rounded-[4px]"
          >
            <Icon
              icon="iconoir:nav-arrow-right"
              className="text-background text-[12px] group-hover:text-[#21407d7e]"
            />
          </Button>
          <Button
            variant="default"
            onClick={() => table.nextPage()}
            className="w-8 h-8 p-0 bg-primary border-none rounded-[4px]"
          >
            <Icon
              icon="material-symbols:keyboard-double-arrow-right-rounded"
              className="text-background text-[12px] group-hover:text-[#21407d7e]"
            />
          </Button>
        </div>
      </div> */}
    </div>
  );
}
