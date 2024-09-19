/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Root from "react-select/async";
import { DropdownIndicator, Option, SelectContainer } from "./components";


const checkSelectStyles = {
  input: (base: any) => ({
    ...base,
    "& input": {
      color: "#FE7F03", // Cor do texto enquanto digita
    },
    "input:focus": {
      boxShadow: "none",
      borderColor: "#FE7F03", // Cor da borda quando o input está focado
    },
  }),
  multiValue: (base: any) => ({
    ...base,
    backgroundColor: "#FFF2E5", // Cor de fundo suave para valores selecionados
    borderRadius: "0.5rem",
    padding: "0.2rem 0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  }),
  multiValueLabel: (base: any) => ({
    ...base,
    whiteSpace: "normal",
    overflow: "visible",
    color: "#292B37", 
  }),
  multiValueRemove: (base: any) => ({
    ...base,
    color: "#FE7F03",
    cursor: "pointer",
  }),
  control: (base: any, state: { isFocused: any; }) => ({
    ...base,
    transition: "border-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease",
    borderRadius: "1.5rem",
    paddingInline: "0.5rem",
    marginBottom: "0.6rem",
    boxShadow: state.isFocused
      ? "0 0 0 2px rgba(254, 127, 3, 0.2)" // Sombra laranja ao focar
      : "none",
    borderColor: state.isFocused ? "#FE7F03" : "#cdcdcd", // Borda laranja ao focar
    "&:hover": {
      borderColor: "#FE7F03", // Cor da borda ao passar o mouse
    },
    "&:hover .chevron-icon": {
      color: "#FE7F03",
    },
  }),
  option: (provided: any, state: { isSelected: any; }) => ({
    ...provided,
    backgroundColor: state.isSelected && "#FFF2E5",
    paddingBlock: "1rem",
    borderBlock: "1px solid #f0f0f0",
    color: state.isSelected ? "#ff6f00" : "#292B37", // Cor do texto quando selecionado
    cursor: "pointer",
    overflow: "hidden",
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: "#fdf3e9",
    },
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: "1.5rem",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Sombra no dropdown
    marginTop: "0.5rem",
    overflow: "hidden",
  }),
  menuList: (provided: any) => ({
    ...provided,
    maxHeight: "300px",
    overflowY: "auto",
    "::-webkit-scrollbar": {
      display: "none", // Oculta a barra de rolagem no Chrome
    },
    scrollbarWidth: "none", // Oculta a barra de rolagem no Firefox
  }),
  placeholder: (base: any) => ({
    ...base,
    color: "#888888", // Cor do placeholder
  }),
  indicatorSeparator: () => ({
    display: "none", // Remove a linha separadora entre os indicadores
  }),
}

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
      styles={checkSelectStyles}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
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
