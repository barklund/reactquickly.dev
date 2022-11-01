function Button({ children, as = "button", Icon = null, ...rest }) {
  const Component = as;
  return (
    <Component
      className="flex items-center gap-4 bg-blue-700 px-4 py-2 text-white rounded"
      {...rest}
    >
      {Icon && <Icon />}
      {children}
    </Component>
  );
}

export default Button;
