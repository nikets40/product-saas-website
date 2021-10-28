import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import StarIconOutlined from "@heroicons/react/outline/StarIcon";

function TestimonialItem({ rating, testimonial, userImg, name, designation }) {
  var ratings = [];
  for (var i = 0; i < 5; i++)
    ratings.push(i < rating ? <StarIcon key={i}/> : <StarIconOutlined key={i} />);

  return (
    <div className="border rounded-md max-w-md">
      <div className="px-7 pt-7 pb-6">
        <div className="text-yellow-400 flex h-8">
         {ratings}
        </div>
        <p className="text-left pt-4">{testimonial}</p>

        <div>
          <div className="mt-4 flex items-center">
            <img
              className=" w-14 h-14 border border-[#BDBDBD] bg-black rounded-full object-cover"
              src={userImg}
              alt=""
            />
            <div className="text-left ml-[14px]">
              <h6 className="text-primary font-bold">{name}</h6>
              <p className="text-sm font-medium">{designation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialItem;
