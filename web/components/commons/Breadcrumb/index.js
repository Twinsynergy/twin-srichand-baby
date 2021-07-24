import React from "react";
import { useRouter } from "next/router";

const Breadcrumb = (props) => {
  const { postTitle, routes } = props;
  const router = useRouter();
  const path = router.asPath;
  const host = path.split("/");

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb inline-block text-gray-500">
        <li className="inline-block">
          <a href="/">Srichand Baby</a>
        </li>
        {routes.map((item) => {
          const last = host[host.length - 1];
          // const last = routes.indexOf(item.breadcrumb) === routes.length - 1;
          return last === item.breadcrumb ? (
            <li className="inline-block capitalize pl-2 active" key={item.breadcrumb}>
              {postTitle
                ? postTitle
                : item.breadcrumb.length > 50
                ? `${item.breadcrumb.replaceAll("-", " ").substring(0, 50)}...`
                : item.breadcrumb.replaceAll("-", " ")}
            </li>
          ) : (
            <li className="inline-block capitalize pl-2" key={item.breadcrumb}>
              <a href={`/${item.breadcrumb}`}>{item.breadcrumb.replaceAll("-", " ")}</a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
