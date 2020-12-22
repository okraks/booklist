import React, { useState, createContext } from "react";
import uuid from "uuid/v4";
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Name of the Wind", author: "Patric Rothfuss", id: uuid() },
    { title: "The Final Empire", author: "Brandom Sanderson", id: uuid() },
  ]);

  return <BookContext.Provider>{this.props.children}</BookContext.Provider>;
};
