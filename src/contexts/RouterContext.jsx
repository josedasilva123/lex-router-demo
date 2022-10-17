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
    const pathname = window.location.pathname; // pathname é o que é digitado após a baseURL no navegador ( e antes do search )
    const search = window.location.search; // os parâmetros escritos no navegador

    /*
     url: a url do navegador (combinando pathname e search)
     pathname: pathname isolada, utilizada como condição de renderização para as rotas
     search: parâmetros de busca que serão convertidos de string para objeto por meio da função getParams
    */
    setCurrentRoute({
      url: search ? pathname + search : pathname,
      pathname: pathname,
      search: search,
    });
  }, []);

  /* efeito que espelha o navegador com o estado currentRoute */
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
    /* covertendo string em objetos combinado os métodos substring, split e reduce (todos métodos imutáveis) */
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
