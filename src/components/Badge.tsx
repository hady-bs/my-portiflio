import React from "react";

function Badge({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: string;
}) {
  return (
    <div>
      {icon}
      {children}
    </div>
  );
}

export default Badge;
