import { motion } from "framer-motion";
import React from "react";

interface Props {
  source: string;
  width: string;
  height: string;
  style: object;
}
const ImageCard: React.FC<Props> = ({ source, width, height, style }) => {
  return (
    <div style={{ width: width, height: height, overflow: "hidden" }}>
      <motion.img
        src={source}
        alt="description"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        style={{ width: width, height: height, ...style }}
        loading="lazy"
      />
    </div>
  );
};

export default ImageCard;
