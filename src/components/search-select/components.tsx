import {
  components as ComponentSelect,
  ContainerProps,
  OptionProps,
} from "react-select";
import { Checkbox } from "../ui/checkbox";
export const Option = ({ ...props }: OptionProps) => {
  return (
    <ComponentSelect.Option {...props}>
      <div className="inline-flex gap-2 items-center">
        <Checkbox
          checked={props.isSelected}
          onChange={() => null}
          className="peer h-4 w-4 shrink-0"
        />
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {props.label}
        </label>
      </div>
    </ComponentSelect.Option>
  );
};

export const SelectContainer = ({ ...props }: ContainerProps) => {
  return <ComponentSelect.SelectContainer {...props} className="w-full" />;
};
