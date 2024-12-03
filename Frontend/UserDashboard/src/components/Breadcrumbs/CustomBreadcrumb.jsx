"use client";
import { HiHome } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { Breadcrumb } from "flowbite-react";

function CustomBreadcrumb() {
  const location = useLocation();
  let curruntLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      curruntLink = +"/" + crumb;
      return (
          <Breadcrumb.Item key={crumb} href={curruntLink}>{crumb[0].toUpperCase()+crumb.slice(1)}</Breadcrumb.Item>
      );
    });
  return (
    <Breadcrumb aria-label="Default breadcrumb example" className="pb-4 pt-3">
      <Breadcrumb.Item href="/" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      {crumbs}
    </Breadcrumb>
  );
}

export default CustomBreadcrumb;
