import React from "react";
import { CheckSelect } from "./components/check-select";
import { SearchSelect } from "./components/search-select";
import { ALPHABET_LIST_DEBOUNCE } from "./debounces/data";

export function App(): React.ReactElement {
  return (
    <div className="flex items-center justify-center h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Select with Checkbox</h2>
          <CheckSelect
            defaultOptions
            loadOptions={ALPHABET_LIST_DEBOUNCE}
            isMulti
            isSearchable
            className="w-full max-w-sm"
          />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Select with Search</h2>
          <SearchSelect
            defaultOptions
            loadOptions={ALPHABET_LIST_DEBOUNCE}
            className="w-full max-w-sm"
          />
        </div>
      </section>
    </div>
  );
}
