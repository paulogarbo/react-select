import React from "react";
import Root from "react-select/async";
import { DropdownIndicator, Option, SelectContainer } from "./components";

const CheckSelect = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ ...props }, ref) => {
  return (
    <Root
      {...props}
      ref={ref}
      isMulti
      placeholder="Escolha um convênio"
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
          borderRadius: "1.5rem",
          paddingInline: "0.5rem",
          marginBottom: "0.6rem",
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? '#FFF2E5': 'transparent',
          paddingBlock: "1rem",
          borderBlock: "1px solid #CDCDD4",
        }), 
        menu: (base) => ({
          ...base, 
          borderRadius: "1.5rem",
        }), 
        menuList: (provided) => ({
          ...provided,
          paddingBlock: "1rem",
          maxHeight: '300px', 
          overflowY: 'auto', 
          '::-webkit-scrollbar': {
            display: 'none', 
          },
          'scrollbar-width': 'none', 
        }),
        indicatorSeparator: () => ({
          display: "none",
        })
      }}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      // isSearchable
      components={{
        Option: Option,
        SelectContainer: SelectContainer,
        DropdownIndicator: DropdownIndicator,
      }}
    />
  );
});

CheckSelect.displayName = "CheckSelect";

export { CheckSelect };
