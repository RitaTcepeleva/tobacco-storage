"use client";

import { createContext, useContext, useState } from "react";
import type { Filters } from "@/shared/types";

type FiltersContextType = {
  filters: Filters;
  setFilter: (key: keyof Filters, value: string) => void;
  resetFilters: () => void;
};

const FiltersContext = createContext<FiltersContextType | null>(null);

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<Filters>({});

  const setFilter = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? undefined : value,
    }));
  };

  const resetFilters = () => {
    setFilters({});
  };

  return (
    <FiltersContext.Provider value={{ filters, setFilter, resetFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}

export function useFilters() {
  const ctx = useContext(FiltersContext);

  if (!ctx) {
    throw new Error("useFilters must be used inside FiltersProvider");
  }

  return ctx;
}
