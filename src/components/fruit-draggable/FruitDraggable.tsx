import { useDraggable } from "@dnd-kit/core";
import { FC } from "react";
import styles from "./FruitDraggable.module.css";
import { CSS } from "@dnd-kit/utilities";

interface IFruitDraggable {
  children: string;
}

const FruitDraggable: FC<IFruitDraggable> = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.children,
    data: { title: props.children }
  });

  return (
    <div
      ref={setNodeRef}
      className={styles["fruit-item"]}
      style={{ transform: CSS.Translate.toString(transform) }}
      {...attributes}
      {...listeners}
    >
      {props.children}
    </div>
  );
};

export default FruitDraggable;
