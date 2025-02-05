import classNames from "classnames";
import "./Item.scss";
import type { ReactNode } from "react";
import { motion } from "framer-motion"

type ItemProps = {
  children: ReactNode;
  selected: boolean;
  shouldShake?: boolean;
  itemOnClick: () => void;
};

const Item = ({ children, selected, shouldShake, itemOnClick }: ItemProps) => (
  <motion.div
    className={classNames("item", { selected })}
    animate={shouldShake ? { x: [-5, 5, -5, 5, 0] } : {}}
    transition={{ duration: 0.3 }}
  >
    <button onClick={itemOnClick}>{children}</button>
  </motion.div>
);

export default Item;
