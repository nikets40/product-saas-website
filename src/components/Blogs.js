import React from "react";
import BlogItem from "./BlogItem";

function Blogs() {
  return (
    <section className="container mt-28 text-center md:text-left flex flex-col items-center">
      <h2 className="text-4xl font-bold">Contents Strategies</h2>
      <p className="font-medium mt-2">
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.
      </p>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <BlogItem
          imgSrc="images/blog-1.jpg"
          author="Wahid Ari"
          date="03 Mar 2019"
          title="Increasing Prosperity With Positive Thinking"
        />
        <BlogItem
          imgSrc="images/blog-2.jpg"
          author="Niket Singh"
          date="03 Mar 2019"
          title="Motivation Is The First Step To Success"
        />
        <BlogItem
          imgSrc="images/blog-3.jpg"
          author="Divyanshi "
          date="03 Mar 2019"
          title="Success Steps For Your Personal Or Business"
        />
         <BlogItem
          imgSrc="images/blog-4.jpg"
          author="Manhar"
          date="03 Mar 2019"
          title="Business & Personal Growth With Mindfullness"
        />
      </div>

      <button className="primary-button mt-10">View More</button>
    </section>
  );
}

export default Blogs;
