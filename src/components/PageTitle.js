import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageTitle() {
  const location = useLocation();
  let [title, setTitle] = useState("");
  useEffect(() => {
    const newTitle = location.pathname;
    if (newTitle.length > 0) {
      setTitle(newTitle.slice(1));
    }
  }, [location]);

  if (title) {
    return <h2 className="page-title">{title}</h2>;
  }
  return <></>;
}
