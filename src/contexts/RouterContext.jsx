/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from "react";

export const RouterContext = createContext({});

export const RouterProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState({
    url: "",
    pathname: "",
    search: "",
  });

  useEffect(() => {
    const pathname = window.location.pathname;
    const search = window.location.search;
    console.log(search);

    setCurrentRoute({
      url: search ? pathname + search : pathname,
      pathname: pathname,
      search: search,
    });
  }, []);

  useEffect(() => {
    window.history.pushState("", "", currentRoute.url);
  }, [currentRoute]);

  const navigate = (newPathname, newSearch) => {
    setCurrentRoute({
      url: newSearch ? newPathname + newSearch : newPathname,
      pathname: newPathname,
      search: newSearch,
    });
  };

  const getParams = () => {
    const urlParams = currentRoute.search
      .substring(1)
      .split("&")
      .reduce((result, value) => {
        const parts = value.split("=");
        if (parts[0])
          result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
        return result;
      }, {});
    
    return urlParams;
  };

  return (
    <RouterContext.Provider value={{ currentRoute, setCurrentRoute, navigate, getParams }}>
      {children}
    </RouterContext.Provider>
  );
};
