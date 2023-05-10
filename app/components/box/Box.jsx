import cx from "classnames";

function Box({ className, children }) {
  return (
    <div
      className={cx("rounded-3xl", className)}
      style={{ boxShadow: "0px 0px 9px 1px rgba(0, 0, 0, 0.25)" }}
    >
      {children}
    </div>
  );
}

export default Box;
