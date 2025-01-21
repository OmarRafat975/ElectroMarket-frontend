/* eslint-disable react/prop-types */
export default function Title({ children, ...props }) {
  return (
    <div className="main-heading" {...props}>
      <h2>{children}</h2>
    </div>
  );
}
