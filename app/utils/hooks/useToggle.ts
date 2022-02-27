import * as React from "react";

export default function useToggle(initialState: boolean) {
  const [state, setState] = React.useState(initialState);

  const toggle = React.useCallback(() => {
    setState((prev) => !prev);
  }, []);

  return [state, toggle] as const;
}
