import React from "react";
import Root from "react-select/async";
import { SelectContainer } from "./components";

const SearchSelect = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ ...props }, ref) => {
  return (
    <Root
      {...props}
      ref={ref}
      isMulti
      // unstyled
      styles={{
        input: (base) => ({
          ...base,
          "input:focus": {
            boxShadow: "none",
          },
        }),
        multiValueLabel: (base) => ({
          ...base,
          whiteSpace: "normal",
          overflow: "visible",
        }),
        control: (base) => ({
          ...base,
          transition: "none",
        }),
      }}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      // isSearchable
      components={{
        // Option: Option,
        SelectContainer: SelectContainer,
      }}
    />
  );
});

SearchSelect.displayName = "SearchSelect";

export { SearchSelect };
