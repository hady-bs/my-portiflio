import React from "react";

function Badge({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: string;
}) {
  return (
    <div className="md:text-start text-center">
      {icon}
      {children}
    </div>
  );
}

export default Badge;
