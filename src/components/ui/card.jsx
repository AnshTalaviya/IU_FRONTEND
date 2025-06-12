export function Card({ children, className }) {
  return <div className={`border rounded-md p-4 bg-white shadow ${className}`}>{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={`mt-2 ${className}`}>{children}</div>;
}
