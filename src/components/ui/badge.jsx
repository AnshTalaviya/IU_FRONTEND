export function Badge({ children, className }) {
  return (
    <span className={`inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded ${className}`}>
      {children}
    </span>
  );
}
