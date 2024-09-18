import {
  components as ComponentSelect,
  ContainerProps,
  DropdownIndicatorProps,
  OptionProps,
} from "react-select";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";

export const Option = ({ ...props }: OptionProps) => {
  return (
    <ComponentSelect.Option {...props}>
      <div className={cn(
        "flex items-center justify-between overflow-hidden",
        props.isSelected && 'text-gray-100',
      )}>
        <label className={cn(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          props.isSelected && 'text-gray-700',
        )}>
          {props.label}
        </label>
        <Checkbox
          checked={props.isSelected}
          onChange={() => null}
          className="peer h-5 w-5 shrink-0"
        />
      </div>
    </ComponentSelect.Option>
  );
};

export const SelectContainer = ({ ...props }: ContainerProps) => {
  return <ComponentSelect.SelectContainer {...props} className="w-full" />;
};

export const DropdownIndicator = (props: DropdownIndicatorProps) => {
	return (
		<ComponentSelect.DropdownIndicator {...props}>
			<ChevronDownIcon
				className={cn(
					"h-8 w-8 shrink-0  transition-transform duration-500 text-gray-700",  
					props.isFocused ? "rotate-180" : "rotate-0" 
				)}
				strokeWidth={1.5}
			/>
		</ComponentSelect.DropdownIndicator>
	);
};