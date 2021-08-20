import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import moment from "moment";

const BlogCard = (props) => {
  const { title, slug, image, published, intro } = props;
  return (
    <div className="p-4 md:w-1/2">
      <div className="h-full overflow-hidden">
        <Link href="/blog/[slug]" as={`/blog/${slug}`}>
          <a>
            <span className="">
              <img
                className="rounded-lg xl:h-72 lg:h-48 h-36 w-full object-cover object-center"
                src={image.replace(
                  "//a.storyblok.com",
                  "//img2.storyblok.com/0x500/filters:quality(80):format(webp)"
                )}
                alt={title}
                loading="lazy"
                // 720x400
              />
            </span>
          </a>
        </Link>
        <div className="py-6">
          <h2 className="blog-title  text-2xl sm:text-3xl font-semibold text-gray-900">{title}</h2>
          <p className="text-xl  font-light mb-3">
            โพสเมื่อวันที่ : {moment(published).format("DD/MM/YYYY")}
          </p>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string,
  published: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  intro: PropTypes.string
};

export default BlogCard;
