import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Breadcrumb from "../Breadcrumb";

const PageTitle = (props) => {
  const { title, className, hasBreadcrumbs, postTitle } = props;
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      // check and remove
      if (linkPath.includes("asc")) {
        linkPath.splice(2);
      }
      if (linkPath.includes("desc")) {
        linkPath.splice(2);
      }
      //
      linkPath.shift();

      const pathArray = linkPath.map((paths, i) => {
        return { breadcrumb: paths, href: `/${linkPath.slice(0, i + 1).join("/")}` };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <div className={`blog page-title p-5 md:p-10 text-xl sm:text-2xl ${className}`}>
      <div className="container mx-auto">
        <div className="well">
          {title && <h2>{title}</h2>}
          {hasBreadcrumbs === true ? <Breadcrumb postTitle={postTitle} routes={breadcrumbs} /> : ""}
        </div>
      </div>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  hasBreadcrumbs: PropTypes.bool,
  postTitle: PropTypes.string
};
PageTitle.defaultProps = {
  className: "",
  hasBreadcrumbs: true
};

export default PageTitle;
