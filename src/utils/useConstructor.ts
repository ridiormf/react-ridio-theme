import React from "react";

export default function useConstructor(onBuilding: () => void): void {
  const created = React.useRef(false);
  if (!created.current) {
    created.current = true;
    onBuilding();
  }
}
