import React from "react";

export default function BottomSection() {
  return (
    <div className="w-full flex items-center">
      <div className="imageContainer h-[70vh] w-[30%] max-h-[1200px] bg-amber-200"></div>
      <div className="w-[20%] ml-[15%]">
        <h2 className="text-4xl">Lorem Ipsum</h2>
        <p>
          Aliquam metus lacus, efficitur sit amet ligula a, vehicula eleifend
          dolor. Pellentesque vulputate consectetur lectus, sit amet
          pellentesque leo congue ut. Vivamus turpis est, mollis et elit eget,
          venenatis dictum nisl. Suspendisse sit amet erat vel ipsum elementum
          mattis. In vel sagittis velit.
        </p>
      </div>
    </div>
  );
}