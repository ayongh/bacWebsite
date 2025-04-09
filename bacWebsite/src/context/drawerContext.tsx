import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useLocation } from "react-router";
import { routeList } from "../component/common/navigationConstant";

export interface settingDrawerInterface {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  isDrawerOpen: false,
  setIsDrawerOpen: () => {},
} as settingDrawerInterface;

export const SettingDrawerContext = createContext(defaultState);

type settingDrawerProviderProps = {
  children: ReactNode;
};

export default function SettingDrawerProvider({
  children,
}: settingDrawerProviderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [displayChildren, setDisplayChildren] = useState(false);
  const [childrenLinks, setChildrenLinks] = useState([]);
  const [selectedLink, setSelectedLink] = useState("/");

  const location = useLocation();

  useEffect(() => {
    routeList.forEach((route) => {
      if (route?.link === location?.pathname && !route?.hasChildren) {
        setSelectedLink(route?.link);
      } else {
        route?.children.forEach((child) => {
          if (child?.link === location?.pathname) {
            setDisplayChildren(true);
            setChildrenLinks(route?.children);
            setSelectedLink(route?.link);
          }
        });
      }
    });
  }, []);

  return (
    <SettingDrawerContext.Provider
      value={{
        isDrawerOpen,
        setIsDrawerOpen,
        displayChildren,
        setDisplayChildren,
        childrenLinks,
        setChildrenLinks,
        selectedLink,
        setSelectedLink,
      }}>
      {children}
    </SettingDrawerContext.Provider>
  );
}
