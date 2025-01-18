import React from "react";
import * as RadixSwitch from "@radix-ui/react-switch";
import PropTypes from "prop-types";

const variants = {
  swtFillBluegray100: {
    root: "radix-switch-root relative w-11 h-[22px] bg-[#cdcdcd] rounded-full outline-none cursor-default data-[state=checked]:bg-[#108a00]",
    thumb: "radix-switch-thumb block w-[18px] h-[18px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]"
  }
};
const sizes = {
  xs: {
    width: 44,
    height: 22,
  },
};

const Switch = ({
  value = false,
  className = "",
  checkedIcon = <></>,
  uncheckedIcon = <></>,
  onChange,
  variant = "swtFillBluegray100",
  size = "xs",
}) => {
  const [checked, setChecked] = React.useState(value);

  React.useEffect(() => {
    setChecked(value);
  }, [value]);

  const handleCheckedChange = (checked) => {
    setChecked(checked);
    if (onChange) {
      onChange(checked);
    }
  };

  const styles = variants[variant] || variants.swtFillBluegray100;

  return (
    <div className={`radix-switch-wrapper ${className}`}>
      <RadixSwitch.Root
        checked={checked}
        onCheckedChange={handleCheckedChange}
        className={`${styles.root}`}
      >
        <RadixSwitch.Thumb className={styles.thumb} />
      </RadixSwitch.Root>
    </div>
  );
};

Switch.propTypes = {
  value: PropTypes.bool,
  className: PropTypes.string,
  checkedIcon: PropTypes.node,
  uncheckedIcon: PropTypes.node,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["swtFillBluegray100"]),
};

export { Switch };
