import React from "react";
import BenefitItem from "./BenefitItem";
import { CheckIcon } from "@heroicons/react/solid";

function Benefits() {
  return (
    <section className="container mt-24 space-y-24">
      <BenefitItem
        image="./images/benefit-1.svg"
        heading1="Effortless Validation for"
        heading2="Management"
        description="The Myspace page defines the individual, his or her characteristics,
      traits, personal choices and the overall personality of the person."
        Content={() => (
          <div>
            <h5 className="mt-6 mb-2 font-semibold">Accessory makers</h5>
            <p>
              While most people enjoy casino gambling, sports betting, lottery
              and bingo playing for the fun
            </p>
            <h5 className="mt-6 mb-2 font-semibold">Alterationists</h5>
            <p>
              If you are looking for a new way to promote your business that
              won’t cost you more money,
            </p>
          </div>
        )}
      />

      <BenefitItem
        image="./images/benefit-2.svg"
        heading1="Easier decision making for"
        heading2="Customer Support"
        description="The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. "
        Content={() => (
          <div className="flex flex-col space-y-6">
            <CheckedItem
              bgColor="#FF9900"
              text="Never worry about overpaying for your energy again."
            />
            <CheckedItem
              bgColor="#F03E3D"
              text="We will only switch you to energy companies that we trust and will treat you right"
            />
            <CheckedItem
              bgColor="#4D8DFF"
              text="We track the markets daily and know where the savings are."
            />
          </div>
        )}
      />

      <BenefitItem
        image="./images/benefit-3.svg"
        heading1="Optimisation for"
        heading2="Collaborative"
        description="Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. "
        Content={() => (
          <div>
            <h5 className="mt-6 mb-2 font-semibold">Accessory makers</h5>
            <p>
              While most people enjoy casino gambling, sports betting, lottery
              and bingo playing for the fun
            </p>
            <h5 className="mt-6 mb-2 font-semibold">Alterationists</h5>
            <p>
              If you are looking for a new way to promote your business that
              won’t cost you more money,
            </p>
          </div>
        )}
      />
    </section>
  );
}

export default Benefits;

function CheckedItem({ bgColor, text }) {
  return (
    <div>
      <div className="flex items-center space-x-6">
        <div style={{ background: `${bgColor}` }} className="rounded-xl p-1.5">
          <CheckIcon className="h-8 text-white" />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
