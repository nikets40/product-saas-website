import React from "react";
import TestimonialItem from "./TestimonialItem";

function Testimonials() {
  const testimonial =
    "Product helps you see how many more days you need to work to reach your financial goal.";
  return (
    <section className="container mt-36 text-center flex flex-col items-center">
      <h3 className="text-4xl font-bold">What Clients Say</h3>
      <p className="font-medium mt-4 max-w-lg">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics{" "}
      </p>

      <div className="mt-12 min-w-[80vw] justify-center md:gap-4 md:min-w-full grid gap-8 md:grid-cols-3">
        <TestimonialItem
          name="Nina Watson"
          designation="Designer"
          userImg="./images/user-1.jpg"
          rating={4}
          testimonial={testimonial}
        />
        <TestimonialItem
          name="Janice Harrison"
          designation="Programmer"
          userImg="./images/user-2.jpg"
          rating={3}
          testimonial={testimonial}
        />
        <TestimonialItem
          name="Amy Adams"
          designation="Photographer"
          userImg="./images/user-3.jpg"
          rating={4}
          testimonial={testimonial}
        />
      </div>
    </section>
  );
}

export default Testimonials;
