import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const Jumbotron = (props) => {
  const { title, className } = props;
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);
  const path = router.asPath;
  const host = path.split("/");
  // let lastItem = host[1];
  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
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
    <div className={`blog jumbotron p-5 md:p-10 text-xl sm:text-2xl ${className}`}>
      <div className="container mx-auto">
        <div className="well">
          {title && <h2>{title}</h2>}
          {/* Breadcrumb */}
          <ol className="breadcrumb inline-block text-gray-500">
            <li className="inline-block">
              <a href="/">Srichand Baby</a>
            </li>
            {breadcrumbs.map((item) => {
              const last = host[host.length - 1];
              return last === item.breadcrumb ? (
                <li className="inline-block capitalize pl-2 active" key={item.breadcrumb}>
                  {item.breadcrumb.replace("-", " ")}
                </li>
              ) : (
                <li className="inline-block capitalize pl-2" key={item.breadcrumb}>
                  {item.breadcrumb.replace("-", " ")}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      {/* /.container */}
    </div>
  );
};

Jumbotron.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string
};
Jumbotron.defaultProps = {
  className: ""
};

export default Jumbotron;
