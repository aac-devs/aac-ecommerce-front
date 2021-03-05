import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { categoriesStartLoading } from "../actions/category.action";
import { Navbar } from "../components/views/Navbar.jsx";

export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesStartLoading());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <h1>App Router</h1>
    </div>
  );
};
