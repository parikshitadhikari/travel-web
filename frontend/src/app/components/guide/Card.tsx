"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { useOutsideClick } from "@/app/hooks/use-outside-click";

// Define the type structure for a guide card
type GuideCard = {
  id: number;
  title: string;
  description: string;
  image: string;
  content: () => JSX.Element | string;
};

export default function ExpandableGuideDemo() {
  const [guides, setGuides] = useState<GuideCard[]>([]);
  const [activeGuide, setActiveGuide] = useState<GuideCard | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  // Fetch data from the API and transform it to match the GuideCard structure
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/auth/guide");
        const transformedGuides = response.data.map((item: any) => ({
          id: item.id,
          title: item.name,
          description: item.description,
          image: item.img,
          content: () => item.description,
        }));
        setGuides(transformedGuides);
      } catch (error) {
        console.error("Error fetching guide data:", error);
      }
    };
    fetchData();
  }, []);

  // Handle closing the expanded guide with the ESC key or outside click
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveGuide(null);
    };

    if (activeGuide) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeGuide]);

  useOutsideClick(ref, () => setActiveGuide(null));

  return (
    <>
      <AnimatePresence>
        {activeGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeGuide && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${activeGuide.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute top-2 right-2 lg:hidden bg-white rounded-full h-6 w-6"
              onClick={() => setActiveGuide(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${activeGuide.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${activeGuide.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={activeGuide.image}
                  alt={activeGuide.title}
                  className="w-full h-80 lg:h-80 object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${activeGuide.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {activeGuide.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${activeGuide.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {activeGuide.description}
                    </motion.p>
                  </div>
                </div>

                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                  >
                    {activeGuide.content()}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ul className="max-w-6xl mx-auto w-full gap-4">
        {guides.map((guide, index) => (
          <motion.div
            layoutId={`card-${guide.title}-${id}`}
            key={index}
            onClick={() => setActiveGuide(guide)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${guide.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={guide.image}
                  alt={guide.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${guide.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {guide.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${guide.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {guide.description}
                </motion.p>
              </div>
            </div>

            {/* Learn More Button */}
            <motion.button
              layoutId={`learn-more-${guide.title}-${id}`}
              className="text-blue-500 hover:scale-110 transition-all mt-4 md:mt-0"
              onClick={() => setActiveGuide(guide)}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

// Close Icon component
export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);
