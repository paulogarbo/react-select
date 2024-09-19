import debounce from "debounce-promise";

type Option = {
  value: string;
  label: string;
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const ALPHABET_LIST_DEBOUNCE = debounce(
  async (value: string): Promise<Option[]> => {
    return (
      ALPHABET
        .filter((alphabet) => alphabet === value.toUpperCase())
        .map((letter) => ({
          value: letter,
          label: letter,
        }))
    );
  },
  1000
);
