import { createContext } from "react";

const videoContext = createContext(null);

export const VideoContextProvider = ({ children }: React.PropsWithChildren) => {
  return <videoContext.Provider value={null}>{children}</videoContext.Provider>;
};
