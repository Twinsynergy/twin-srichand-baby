import React from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";
import styled from "styled-components";

const RichTextBlock = styled.div`
  p {
    margin-bottom: 15px;
    /* text-2xl */
    font-size: 1.5rem;
    line-height: 2rem;
  }
  h3 {
    margin-bottom: 15px;
    margin-top: 30px;
  }
  ul {
    list-style: disc;
  }
  ol {
    list-style: decimal;
  }
  ul,
  ol {
    padding-left: 30px;
    margin-bottom: 45px;
    p {
      margin-bottom: 5px;
    }
  }
  blockquote {
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 45px;
    padding: 0.5rem;
    border-left: 0;
    &::before {
      content: "“";
      left: -5rem;
      top: -1rem;
    }
    &::after {
      content: "”";
      right: -5rem;
      bottom: -3rem;
    }
    &::after,
    &::before {
      position: absolute;
      color: #f1efe6;
      font-size: 8rem;
      width: 4rem;
      height: 4rem;
    }
  }
`;

const SinglePost = ({ blok, published }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="post-inner container mx-auto px-5">
        <div className="bg-white-half w-full post-header">
          <h1 className="text-3xl font-bold tracking-wide capitalize">{blok.title}</h1>
          <div className="meta meta-grow pt-3">
            <p className="meta-item post-date text-xl text-gray-600 font-light">
              โพสเมื่อวันที่ : <span className="meta-highlight">{published}</span>
            </p>
          </div>
        </div>
        <div className="post-content py-8 md:py-10">
          <div className="leading-relaxed text-gray-400">
            <RichTextBlock>{render(blok.long_text)}</RichTextBlock>
          </div>
        </div>
      </div>
    </SbEditable>
  );
};

export default SinglePost;
