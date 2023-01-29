import { createContext } from "react";

export const refetchContext = createContext(null)

const ReFetchContainer = ({ refetch, children }) => {
  return (
    <>
      <refetchContext value={refetch}>
        {children}
      </refetchContext>
    </>
  );
};

export default ReFetchContainer;