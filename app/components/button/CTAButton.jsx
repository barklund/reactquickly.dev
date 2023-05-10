import cx from "classnames";

function CTAButton({
  children,
  as = "a",
  className,
  rounded = false,
  dark = true,
  Icon = null,
  ...rest
}) {
  const Component = as;
  return (
    <Component
      className={cx(
        "inline-block text-center font-display font-semibold px-10 py-4",
        className,
        rounded ? "rounded-full" : "rounded-md",
        dark ? "text-white" : "bg-white text-teal-300"
      )}
      style={
        dark
          ? {
              background:
                "linear-gradient(94.66deg, #31ACAD 3.85%, #01323D 99.28%)",
              boxShadow: "0px 0px 9px 1px rgba(0, 0, 0, 0.25)",
            }
          : {}
      }
      {...rest}
    >
      {Icon && <Icon />}
      {children}
    </Component>
  );
}

export default CTAButton;
