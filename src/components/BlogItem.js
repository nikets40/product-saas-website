import React from "react";

function BlogItem({ imgSrc, author, date, title }) {
  return (
    <div className="border text-left rounded-xl hover:shadow-lg active:shadow-none cursor-pointer hover:scale-105 active:scale-95 transition ">
      <div className="aspect-w-16 aspect-h-9">
        <img className="rounded-t-xl h-full w-full object-cover" src={imgSrc} alt=""/>
      </div>
      <div className="px-4 pt-6 pb-10">
        <p className="text-base">
          By{" "}
          <span className="font-bold hover:text-primary transition ease-out">
            {author}
          </span>{" "}
          | {date}
        </p>
        <h3 className="font-bold text-2xl mt-3 hover:text-primary transition ease-out">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default BlogItem;
