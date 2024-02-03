"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card } from "./Card";
import Picture1 from "../../public/1.jpg";
import Picture2 from "../../public/2.jpg";
import Picture3 from "../../public/3.jpg";
import Picture4 from "../../public/4.jpg";
import Picture5 from "../../public/5.jpg";
import Picture6 from "../../public/6.jpg";
import Picture7 from "../../public/7.jpg";

const images = [
  Picture1,
  Picture2,
  Picture3,
  Picture4,
  Picture5,
  Picture6,
  Picture7,
];

export default function HorizontalScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    // will return progress of scrolling vertically on the section
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // takes motionValue, array of values to map FROM, array of values to map TO,
  //   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]) // apply this on div which is to be animated
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-65%"]);

  return (
    // height of 300vh to have lots of room for scrolling
    // position: realtive, so the inner element can be sticky to it
    <section ref={targetRef} className=" h-[300vh]">
      {/* we can follow our viewport as we scroll further down, by setting position sticky and top-0
        => when we scroll, the below div stays in view until we reach the bottom of the outer component */}
      <div className="h-screen sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x: x }} className="flex gap-4">
          {images.map((Image, index) => (
            <Card key={index} image={Image} />
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
