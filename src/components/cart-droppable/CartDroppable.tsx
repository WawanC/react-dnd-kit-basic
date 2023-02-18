import { useDroppable } from "@dnd-kit/core";
import { FC } from "react";
import styles from "./CartDroppable.module.css";

interface ICartDroppable {
  items: string[];
}

const CartDroppable: FC<ICartDroppable> = (props) => {
  const { setNodeRef } = useDroppable({
    id: "cart-droppable"
  });

  return (
    <ul className={styles.cart} ref={setNodeRef}>
      {props.items.map((item, idx) => (
        <div key={`${item}-${idx}`} className={styles["cart-item"]}>
          {item}
        </div>
      ))}
    </ul>
  );
};

export default CartDroppable;
