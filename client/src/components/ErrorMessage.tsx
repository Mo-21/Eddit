const ErrorMessage = ({ children }: { children: string | undefined }) => {
  if (!children) return null;
  return <div className="text-red-500 text-sm">{children}</div>;
};

export default ErrorMessage;
